import { useSubmit, useActionData } from '@remix-run/react';
import { redirect } from '@remix-run/node';
import { useState } from 'react';

// Simulate database save and redirect
export async function action({ request }) {
  const formData = new URLSearchParams(await request.text());
  const title = formData.get('title');
  const content = formData.get('content');
  const tags = formData.get('tags');
  const category = formData.get('category');

  // Here, you would typically save the data to a database
  console.log('New Post:', { title, content, tags, category });

  // Simulate successful form submission response
  return { success: true };
}

export default function CreatePost() {
  const submit = useSubmit();
  const actionData = useActionData();
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await submit(formData, { method: 'post' });

    if (response.success) {
      setFeedback('Post created successfully!');
      event.target.reset();
    } else {
      setFeedback('Failed to create post. Please try again.');
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Create New Post</h1>
      <form method="post" onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-lg font-medium mb-2">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="border p-2 w-full"
            placeholder="Enter post title"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-lg font-medium mb-2">Content:</label>
          <textarea
            id="content"
            name="content"
            required
            className="border p-2 w-full h-48 resize-none"
            placeholder="Enter post content"
          ></textarea>
        </div>
        <div>
          <label htmlFor="tags" className="block text-lg font-medium mb-2">Tags:</label>
          <input
            type="text"
            id="tags"
            name="tags"
            className="border p-2 w-full"
            placeholder="Enter tags, separated by commas"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-lg font-medium mb-2">Category:</label>
          <select
            id="category"
            name="category"
            className="border p-2 w-full"
            required
          >
            <option value="">Select a category</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Education">Education</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Create Post</button>
        {feedback && <p className="mt-4 text-green-500">{feedback}</p>}
      </form>
    </div>
  );
}
