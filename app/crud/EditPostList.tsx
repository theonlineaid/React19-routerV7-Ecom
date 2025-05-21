import React, { useEffect, useState } from "react";

interface Post {
  id: string;
  title: string;
  views: number;
}

const EditPostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editViews, setEditViews] = useState<string>("");

  const fetchPosts = async () => {
    try {
      const res = await fetch("http://localhost:3000/posts");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error("Error fetching posts", err);
    }
  };

  const startEditing = (post: Post) => {
    setEditingId(post.id);
    setEditTitle(post.title);
    setEditViews(post.views.toString());
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditTitle("");
    setEditViews("");
  };

  const updatePost = async (id: string) => {
    const updated = {
      title: editTitle,
      views: Number(editViews),
    };

    try {
      const res = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...updated }),
      });

      if (!res.ok) throw new Error("Failed to update");

      await fetchPosts();
      cancelEditing();
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Posts</h2>
      {posts.map((post) => (
        <div
          key={post.id}
          className="border p-4 rounded-lg mb-4 bg-white shadow"
        >
          {editingId === post.id ? (
            <div className="space-y-2">
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="number"
                value={editViews}
                onChange={(e) => setEditViews(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => updatePost(post.id)}
                  className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Save
                </button>
                <button
                  onClick={cancelEditing}
                  className="px-4 py-1 bg-gray-400 text-white rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600">Views: {post.views}</p>
              <button
                onClick={() => startEditing(post)}
                className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Edit
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default EditPostList;
