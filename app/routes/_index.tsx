import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Learn Remix" },
    { name: "description", content: "Resources and guides to help you learn Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl font-bold">Learning Remix</h1>
      <p className="mt-4 text-lg">
        Welcome to the world of Remix! Remix is a powerful framework for building modern web applications.
        Whether you're a beginner or looking to deepen your knowledge, here are some essential resources to help you get started:
      </p>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Documentation
          </a>
          : Comprehensive guide to all features and concepts of Remix.
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/quickstart"
            rel="noreferrer"
          >
            Quick Start Guide
          </a>
          : A fast way to get up and running with Remix.
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/tutorial"
            rel="noreferrer"
          >
            Remix Tutorial
          </a>
          : A step-by-step tutorial to build your first Remix application.
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://github.com/remix-run/remix"
            rel="noreferrer"
          >
            Remix GitHub Repository
          </a>
          : Explore the source code and contribute to Remix.
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://twitter.com/remix_run"
            rel="noreferrer"
          >
            Follow Remix on Twitter
          </a>
          : Stay updated with the latest news and updates from the Remix team.
        </li>
      </ul>
    </div>
  );
}
