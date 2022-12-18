import React from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'

const style = {
  button: `flex justify-center bg-gray-100 shadow hover:bg-gray-300 cursor-pointer px-4 py-2`,
}

const Signout = () => {
  return (
    <div className={style.button} onClick={() => signOut(auth)}>
      Log out
    </div>
  )
}

export default Signout
