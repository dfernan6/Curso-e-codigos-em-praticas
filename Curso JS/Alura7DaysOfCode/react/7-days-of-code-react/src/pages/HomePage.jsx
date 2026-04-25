import React from "react";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center bg-blue-600 text-white px-6 py-4 shadow">
        <h1 className="text-2xl font-bold">Aluritter</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm">matheushcastiglioni@gmail.com</span>
          <button className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded shadow">
            Sair
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-2xl mx-auto mt-6 p-4">
        {/* New Post */}
        <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
          <textarea
            className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            placeholder="Alurite agora mesmo..."
            maxLength={255}
          />
          <p className="text-xs text-gray-500 mt-2">
            Você ainda pode digitar 255 caracteres
          </p>
          <button className="mt-3 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow">
            aluritar
          </button>
        </div>

        {/* Feed */}
        <div className="space-y-4">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <p className="text-gray-800 text-lg">Seven7OfCode com React =DDD</p>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>matheushcastiglioni@gmail.com</span>
              <span>6/30/2023, 3:52:49 PM</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
