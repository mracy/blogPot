import pkg from '@remix-run/node';
const { MetaFunction } = pkg;

export function meta() {
  return [
    { title: 'About Us' },
    { description: 'Learn more about us on this page.' },
  ];
}

export default function About() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to our blog application! We are dedicated to providing insightful and engaging content to our readers.
      </p>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          Our mission is to deliver high-quality content that informs, inspires, and engages our audience. We believe in the power of storytelling and strive to create a platform where voices can be heard and ideas can flourish.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Company History</h2>
        <p className="text-lg text-gray-700">
          Founded in 2024, our blog application started as a small project with a vision to bring together a community of writers and readers. Over the years, we have grown into a vibrant platform that continues to evolve and adapt to the needs of our users.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Aashish Chaudhary</h3>
              <p className="text-lg text-gray-700">Founder & CEO</p>
              <p className="text-gray-600 mt-2">Aashish is passionate about technology and content creation, leading our team with a vision to innovate and excel in the digital space.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Jane Doe</h3>
              <p className="text-lg text-gray-700">Content Manager</p>
              <p className="text-gray-600 mt-2">Jane oversees our content strategy, ensuring that we deliver valuable and engaging posts to our readers.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">John Smith</h3>
              <p className="text-lg text-gray-700">Lead Developer</p>
              <p className="text-gray-600 mt-2">John is responsible for the technical aspects of our platform, ensuring a seamless and robust user experience.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>Integrity: We commit to transparency and honesty in all our operations.</li>
          <li>Innovation: We embrace creativity and constantly seek new ways to improve.</li>
          <li>Community: We value our users and strive to create a supportive and interactive environment.</li>
          <li>Excellence: We aim for the highest quality in everything we do.</li>
        </ul>
      </section>
    </div>
  );
}
