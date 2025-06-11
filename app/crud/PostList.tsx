import React, { useEffect, useState } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

interface Post {
  id: string;
  title: string;
  views: number;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      if (!response.ok) throw new Error("Failed to fetch posts");
      const data: Post[] = await response.json();
      setPosts(data);
    } catch (err) {
      setError("❌ Error loading posts");
    } finally {
      setLoading(false);
    }
  };

  const handleEditSubmit = async () => {
    if (!editingPost) return;
    try {
      const res = await fetch(`http://localhost:3000/products/${editingPost.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editingPost),
      });
      if (!res.ok) throw new Error("Update failed");
      await fetchPosts();
      setEditingPost(null);
    } catch (err) {
      alert("❌ Failed to update post");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (error) return <p className="text-center text-red-600 mt-4">{error}</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-500">
        All Posts
      </h2>
      {posts.length === 0 ? (
        <p className="text-gray-600">No posts found.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li
              key={post.id}
              className="relative border border-gray-200 rounded-lg p-4 shadow-sm bg-white dark:bg-black"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500">Views: {post.views}</p>
                </div>

                <div className="relative">
                  <button
                    onClick={() =>
                      setOpenMenuId(openMenuId === post.id ? null : post.id)
                    }
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <EllipsisVerticalIcon className="w-5 h-5" />
                  </button>

                  {openMenuId === post.id && (
                    <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-black border rounded shadow z-10">
                      <button
                        onClick={() => {
                          setEditingPost(post);
                          setOpenMenuId(null);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm dark:text-white text-black dark:hover:text-gray-600"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Edit Modal */}
      {editingPost && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg dark:shadow-gray-800 shadow-gray-300 w-full max-w-md transition-colors duration-300">
            <h3 className="text-xl font-bold mb-4">Edit Post</h3>
            <input
              type="text"
              value={editingPost.title}
              onChange={(e) =>
                setEditingPost({ ...editingPost, title: e.target.value })
              }
              placeholder="Title"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
            />
            <input
              type="number"
              value={editingPost.views}
              onChange={(e) =>
                setEditingPost({
                  ...editingPost,
                  views: Number(e.target.value),
                })
              }
              placeholder="Views"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditingPost(null)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleEditSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostList;
