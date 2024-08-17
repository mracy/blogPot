import { Link, useLoaderData } from '@remix-run/react';
import { useState } from 'react';

const posts = [
  { id: 1, title: 'First Post', content: 'This is the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the second post.' },
  { id: 3, title: 'Third Post', content: 'This is the third post.' },
  // Add more sample posts here
];

export function loader() {
  return { posts };
}

export default function Index() {
  const { posts } = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const filteredPosts = posts
    .filter(post =>
      (filterCategory === 'All' || post.category === filterCategory) &&
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Blog Home</h1>
      <div className="mb-6 flex flex-col space-y-4">
        <div>
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="filter" className="block text-lg font-medium mb-2">Filter by Category:</label>
          <select
            id="filter"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="border p-2 w-full"
          >
            <option value="All">All</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Education">Education</option>
          </select>
        </div>
      </div>
      <ul className="space-y-4">
        {filteredPosts.map((post) => (
          <li key={post.id} className="border-b pb-4">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-700">{post.content}</p>
            <Link to={`/posts/${post.id}`} className="text-blue-500 hover:underline">Read More</Link>
          </li>
        ))}
      </ul>
      <Link to="/create-post" className="mt-4 inline-block bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Create New Post</Link>
    </div>
  );
}
