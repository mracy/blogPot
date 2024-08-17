import { redirect } from '@remix-run/node';

export function loader() {
  const isAdmin = false; // Simulate admin check

  if (!isAdmin) {
    return redirect('/');
  }

  return {};
}

export default function Admin() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to the admin dashboard. Here you can manage various aspects of the application.
      </p>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Overview</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700 mb-4">
            The overview section provides a snapshot of the application's current state, including key metrics and statistics.
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>Total Users: 1200</li>
            <li>Total Posts: 300</li>
            <li>Active Sessions: 45</li>
            <li>Pending Approvals: 10</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Recent Activities</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700 mb-4">
            Stay up-to-date with the latest activities on the platform.
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>User Jane Doe approved their account.</li>
            <li>New post by John Smith titled "How to Use Remix".</li>
            <li>Application updated with new features.</li>
            <li>Pending review for 5 new posts.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Admin Tools</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700 mb-4">
            Utilize these tools to manage users, content, and settings.
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>
              <a href="/admin/users" className="text-blue-700 underline hover:text-blue-900">
                Manage Users
              </a>
            </li>
            <li>
              <a href="/admin/posts" className="text-blue-700 underline hover:text-blue-900">
                Manage Posts
              </a>
            </li>
            <li>
              <a href="/admin/settings" className="text-blue-700 underline hover:text-blue-900">
                Application Settings
              </a>
            </li>
            <li>
              <a href="/admin/reports" className="text-blue-700 underline hover:text-blue-900">
                View Reports
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
