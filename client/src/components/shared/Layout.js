import React from 'react'
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer"


function Layout(props) {
  return (
    <div>
      <Header />
      <Nav />
      {props.children}
      <Footer />
    </div>


)
}

export default Layout
