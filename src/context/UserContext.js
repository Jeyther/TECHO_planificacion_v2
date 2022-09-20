import { useContext, createContext, useState } from 'react'

const UserContext = createContext({})

export const useUserContext = () => useContext(UserContext)

export default function UserContextProvider({ children }) {
  const [profile, setProfile] = useState(
    () => JSON.parse(window.localStorage.getItem('profile'))
  )

  return (
    <UserContext.Provider value={{ profile, setProfile }}>
      {children}
    </UserContext.Provider>
  )
}