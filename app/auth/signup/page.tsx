'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function signup() {
    await supabase.auth.signUp({
      email,
      password
    })

    alert('Account created!')
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-10">
      <div className="glass rounded-[35px] p-10 w-full max-w-md">
        <h1 className="text-5xl font-black mb-8">
          Sign Up
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
            onClick={signup}
            className="w-full bg-purple-500 hover:bg-purple-400 rounded-2xl p-4 font-bold"
          >
            Create Account
          </button>
        </div>
      </div>
    </main>
  )
}