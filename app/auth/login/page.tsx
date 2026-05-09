'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function login() {
    await supabase.auth.signInWithPassword({
      email,
      password
    })

    alert('Logged in!')
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-10">
      <div className="glass rounded-[35px] p-10 w-full max-w-md">
        <h1 className="text-5xl font-black mb-8">
          Login
        </h1>

        <div className="space-y-4">
          <input
            className="w-full glass rounded-2xl p-4 bg-transparent outline-none"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full glass rounded-2xl p-4 bg-transparent outline-none"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={login}
            className="w-full bg-blue-500 hover:bg-blue-400 rounded-2xl p-4 font-bold"
          >
            Login
          </button>
        </div>
      </div>
    </main>
  )
}