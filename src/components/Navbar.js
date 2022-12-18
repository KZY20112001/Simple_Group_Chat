import React from 'react'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import SignIn from './SignIn'
import Signout from './Signout'

const style = {
  nav: `bg-black h-20 flex justify-between items-center p-4`,
  heading: `text-white text-2xl`,
}

const Navbar = () => {
  const [user] = useAuthState(auth)
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Simple Group Chat App</h1>
      {user ? <Signout /> : <SignIn />}
    </div>
  )
}

export default Navbar
