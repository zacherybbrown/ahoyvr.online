export default function HomePage() {
  return (
    <main className="min-h-screen p-10">
      <div className="max-w-7xl mx-auto">

        <div className="glass glow rounded-[40px] p-14">
          <h1 className="text-7xl font-black mb-5">
            AHOYVR FORUMS
          </h1>

          <p className="text-gray-300 text-2xl mb-8 max-w-3xl">
            Futuristic VR discussions, development, gaming, modding, and community.
          </p>

          <div className="flex gap-4">
            <a
              href="/forum"
              className="bg-blue-500 hover:bg-blue-400 px-7 py-4 rounded-2xl font-bold transition"
            >
              Open Forums
            </a>

            <a
              href="/auth/signup"
              className="glass px-7 py-4 rounded-2xl font-bold transition hover:scale-105"
            >
              Create Account
            </a>
          </div>
        </div>

      </div>
    </main>
  )
}