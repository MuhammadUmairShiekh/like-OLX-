import { NavLink, Navigate, Outlet, useNavigate } from 'react-router-dom'
import { auth } from "../config.js/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';



function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false)
  const Navigate = useNavigate()
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const [user, setUser] = useState()
  useEffect(() => {
    onAuthStateChanged(auth, (users) => {
      if (users) {
        setUser(users.email)
        // console.log(users.email)
        // setUser(user.fullName);

      } else {

      }
    });

  }, [])

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      Navigate("/")
      Swal.fire("Log Out")


    } catch (e) {
      Swal.fire(e.message)

    }
  }



  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            {/* <Brand /> */}
            <p> BACH Dey  </p>

          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            {/* <logo512 /> */}
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSb3iuepfIGo15_oQlIXiuWdWCGz7eTqW1zA&usqp=CAU' width={"30"} />
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              {/* <li>
                <NavLink to="/Home">Home</NavLink>
              </li> */}
              <li>
                <NavLink to="/Product">Product</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              
              <li>
                 <i>{user}</i>
              </li>

              <li className="btn3" onClick={handleSignOut}><button> Logout </button></li>

            </ul>

          </div>

        </div>

      </nav>
      <Outlet />
    </>
  )
}

export default Navbar