import { useCallback } from 'react'
import { useUserContext } from 'context/UserContext'

export default function useUser () {
  const { profile, setProfile } = useUserContext()
  const localStorage = window.localStorage

  const login = useCallback((response) => {
    localStorage.setItem('profile', JSON.stringify(response))
    setProfile(response)
  }, [setProfile, localStorage])

  const logout = useCallback(() => {
    setProfile(null)
    localStorage.removeItem('profile')
  }, [setProfile, localStorage])

  return {
    isLogged: Boolean(profile),
    profile: profile,
    login,
    logout
  }
}
