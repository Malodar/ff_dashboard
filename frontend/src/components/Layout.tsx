import React from 'react'
import Navbar from './Navbar'

function Layout(props: React.PropsWithChildren) {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  )
}

export default Layout