export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white p-10">
      <div className="max-w-6xl mx-auto">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
          <h1 className="text-6xl font-black mb-4">
            VR FORUMS
          </h1>

          <p className="text-gray-400 text-xl mb-8">
            Futuristic VR discussions and communities.
          </p>

          <a
            href="/forum"
            className="inline-block bg-blue-500 hover:bg-blue-400 transition px-6 py-3 rounded-2xl font-bold"
          >
            Enter Forums
          </a>
        </div>

      </div>
    </main>
  )
}