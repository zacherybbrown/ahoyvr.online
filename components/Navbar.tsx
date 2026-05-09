export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-black tracking-widest">
          AHOYVR
        </div>

        <div className="flex gap-4">
          <a href="/" className="hover:text-blue-400 transition">Home</a>
          <a href="/forum" className="hover:text-blue-400 transition">Forums</a>
          <a href="/auth/login" className="hover:text-blue-400 transition">Login</a>
          <a href="/auth/signup" className="hover:text-blue-400 transition">Sign Up</a>
        </div>
      </div>
    </nav>
  )
}