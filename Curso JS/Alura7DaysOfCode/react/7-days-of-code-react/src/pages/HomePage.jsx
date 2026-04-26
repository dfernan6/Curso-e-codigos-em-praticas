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
      <header className="w-full flex justify-between items-center bg-blue-900 text-white px-6 py-4 shadow-md">
  <h1 className="text-2xl font-bold tracking-wide">Aluritter</h1>
  <div className="flex items-center gap-4">
    <span className="text-sm font-medium">{auth.currentUser?.email}</span>
    <button
      onClick={handleLogout}
      className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-md shadow font-semibold transition-colors"
    >
      Logout
    </button>
  </div>
</header>


      {/* Main */}
      <main className="max-w-2xl mx-auto mt-6 p-4">
        {/* New Post */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200">
  <textarea
    value={post}
    onChange={(e) => setPost(e.target.value)}
    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-700"
    placeholder="Escreva seu Alurite..."
    maxLength={255}
  />
  <p className="text-xs text-gray-400 mt-2">
    {255 - post.length} caracteres restantes
  </p>
  <button
    onClick={handlePost}
    className="mt-3 w-full bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors shadow-sm"
  >
    Aluritar
  </button>
</div>


        {/* Feed */}
        <div className="space-y-4">
  {feed.map((item) => (
    <div key={item.id} className="bg-white border border-gray-200 shadow-sm rounded-lg p-5">
      <p className="text-gray-900 text-base leading-relaxed">{item.text}</p>
      <div className="flex justify-between text-xs text-gray-500 mt-3">
        <span className="font-medium">{item.email}</span>
        <span>
          {item.createdAt?.toDate
            ? item.createdAt.toDate().toLocaleString()
            : "Sem data"}
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
