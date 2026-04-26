import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";

function HomePage() {
  const [post, setPost] = useState("");
  const [feed, setFeed] = useState([]);

  const handleLogout = async () => {
    await signOut(auth);
    alert("You logged out!");
  };

  const handlePost = async () => {
  if (!post.trim()) return;
  try {
    await addDoc(collection(db, "posts"), {
      text: post,
      email: auth.currentUser?.email,
      uid: auth.currentUser?.uid,
      createdAt: serverTimestamp() // Firestore server time
    });
    setPost("");
  } catch (err) {
    console.error("Error adding post:", err);
  }
};

// Load posts in real time
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setFeed(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="w-full flex justify-between items-center bg-sky-700 text-white px-6 py-4 shadow">
        <h1 className="text-2xl font-bold">Aluritter</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm">{auth.currentUser?.email}</span>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded shadow font-semibold transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-2xl mx-auto mt-6 p-4">
        {/* New Post */}
        <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
          <textarea
            value={post}
            onChange={(e) => setPost(e.target.value)}
            className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none"
            placeholder="Write your Alurite..."
            maxLength={255}
          />
          <p className="text-xs text-gray-500 mt-2">
            {255 - post.length} characters left
          </p>
          <button
            onClick={handlePost}
            className="mt-3 w-full bg-sky-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-sky-700 transition-colors shadow"
          >
            Aluritar
          </button>
        </div>

        {/* Feed */}
        <div className="space-y-4">
          {feed.map((item) => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg p-4">
              <p className="text-gray-800 text-lg">{item.text}</p>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>{item.email}</span>
                <span>
  {item.createdAt && item.createdAt.toDate
    ? item.createdAt.toDate().toLocaleString()
    : "No date"}
</span>


              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default HomePage;
