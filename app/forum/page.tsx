const threads = [
  {
    title: "Best VR Games 2026",
    desc: "Talk about the newest VR games."
  },
  {
    title: "Quest Modding",
    desc: "Share mods and custom content."
  },
  {
    title: "Unity VR Development",
    desc: "Programming and development discussions."
  }
]

export default function ForumPage() {
  return (
    <main className="min-h-screen p-10">
      <div className="max-w-6xl mx-auto">

        <div className="glass rounded-3xl p-5 mb-8">
          <input
            placeholder="Search forums..."
            className="w-full bg-transparent outline-none text-lg"
          />
        </div>

        <div className="space-y-5">
          {threads.map((thread, i) => (
            <div
              key={i}
              className="glass rounded-3xl p-8 hover:scale-[1.01] transition"
            >
              <h2 className="text-3xl font-bold mb-2">
                {thread.title}
              </h2>

              <p className="text-gray-400">
                {thread.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}