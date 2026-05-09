export default function ForumPage() {
  const threads = [
    "Best VR Games of 2026",
    "Unity VR Development Help",
    "Quest Modding Discussion",
    "SteamVR Showcase"
  ]

  return (
    <main className="min-h-screen bg-[#050816] text-white p-10">
      <div className="max-w-5xl mx-auto">

        <input
          placeholder="Search forums..."
          className="w-full mb-8 bg-white/5 border border-white/10 rounded-2xl p-4 outline-none"
        />

        <div className="space-y-4">
          {threads.map((thread, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:scale-[1.01] transition"
            >
              <h2 className="text-2xl font-bold">{thread}</h2>

              <p className="text-gray-400 mt-2">
                Join the discussion with the VR community.
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}