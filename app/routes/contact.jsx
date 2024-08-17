import { useSubmit } from '@remix-run/react';
import { useState } from 'react';

export async function action({ request }) {
  const formData = new URLSearchParams(await request.text());
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  // Simulate form submission
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: `Thank you, ${name}. Your message has been received.` });
    }, 1000);
  });
}

export default function Contact() {
  const submit = useSubmit();
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await submit(formData, { method: 'post' });

    const result = await response.json();
    setFeedback(result.message);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
      </p>
      <form method="post" onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium mb-2">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium mb-2">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-lg font-medium mb-2">Subject:</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium mb-2">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message here..."
            className="border p-2 w-full h-32 resize-none"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
      {feedback && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
          {feedback}
        </div>
      )}
    </div>
  );
}
