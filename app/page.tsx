export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white p-10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl">
          <h1 className="text-6xl font-black mb-4">
            VR FORUMS
          </h1>

          <p className="text-gray-400 text-xl mb-8">
            A futuristic VR community platform.
          </p>

          <button className="bg-blue-500 hover:bg-blue-400 transition px-6 py-3 rounded-2xl font-bold">
            Explore Forums
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-2">Trending</h2>
            <p className="text-gray-400">Popular VR discussions.</p>
          </div>

          <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-2">Development</h2>
            <p className="text-gray-400">Game dev and Unity help.</p>
          </div>

          <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-2">Community</h2>
            <p className="text-gray-400">Meet VR players and creators.</p>
          </div>

        </div>
      </div>
    </main>
  )
}