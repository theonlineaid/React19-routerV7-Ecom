import React, { useState } from "react";

// Define the type for a post
interface Post {
  id?: string;
  title: string;
  views: number;
}

const AddPost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [views, setViews] = useState<string>("0");

  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newPost: Omit<Post, "id"> = {
      title,
      views: Number(views), // Convert string to number here
    };

    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) throw new Error("Failed to add post");

      const result: Post = await response.json();
      setMessage(`✅ Post added with ID: ${result.id}`);
      setTitle("");
      setViews("");
    } catch (error) {
      console.error(error);
      setMessage("❌ Error adding post");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add a New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border text-black border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Views
          </label>
          <input
            type="number"
            value={views}
            onChange={(e) => setViews(e.target.value)}
            required
            className="w-full border text-black border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Add Post
        </button>
      </form>
      {message && (
        <p className="mt-4 text-sm text-center text-green-600 font-medium">
          {message}
        </p>
      )}
    </div>
  );
};

export default AddPost;
