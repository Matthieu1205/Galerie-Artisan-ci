import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

const FAKE_USERS = [
  { email: 'admin@galerie-artisan.ci', password: 'admin123', name: 'Mathieu Adou', role: 'Super Admin' },
  { email: 'editor@galerie-artisan.ci', password: 'editor123', name: 'Édouard Koffi', role: 'Éditeur' }
]

const STORAGE_KEY = 'ga_admin_session'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY)
      if (raw) setUser(JSON.parse(raw))
    } catch {}
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    await new Promise(r => setTimeout(r, 600))
    const found = FAKE_USERS.find(u => u.email === email && u.password === password)
    if (!found) throw new Error('Email ou mot de passe incorrect')
    const session = { email: found.email, name: found.name, role: found.role, loggedAt: Date.now() }
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(session))
    setUser(session)
    return session
  }

  const logout = () => {
    sessionStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be inside AuthProvider')
  return ctx
}
