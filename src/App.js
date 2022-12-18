import React from 'react'
import Navbar from './components/Navbar'
import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Chat from './components/Chat'

//tailwind styling
const style = {
  container: `max-w-full mx-auto text-center `,
  section: `flex flex-col h-full bg-[#E1F8DC] mt-10 shadow-xl border relative`,
}

function App() {
  const [user] = useAuthState(auth)
  console.log(user)
  return (
    <div className={style.container}>
      <section className={style.section}>
        <Navbar />
        {user ? <Chat /> : null}
      </section>
    </div>
  )
}

export default App
