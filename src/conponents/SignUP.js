// import { NavLink } from "react-router-dom"
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { register } from "../config.js/firebase"
function SignUP() {
    const [email, setEMail] = useState("")
    const [password, setPassword] = useState("")
    const [fullName, setFullName] = useState("")
    const [lastName, setLastName] = useState("")


    const resgisterAcct = () => {
        register(email, password, fullName, lastName)
        setEMail("")
        setFullName("")
        setLastName("")
        setPassword("")

    }

    return (
        <>

            < div className="form" >
                <p className="logo">SignUP</p>
                <input type="text" onChange={(e) => setFullName(e.target.value)} value={fullName} placeholder="Full Name" required="" />
                <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder="Last Name" required="" />
                <input type="email" onChange={(e) => setEMail(e.target.value)} value={email} placeholder="Email" required="" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" required="" />
                <button onClick={resgisterAcct} className="login">Sign-UP</button>
                <hr />
                <NavLink to={"/"} className="login">Create New Account</NavLink>
            </div>

        </>
    )
}

export default SignUP


