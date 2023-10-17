// import { NavLink } from "react-router-dom"
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { signIN } from "../config.js/firebase"
import Swal from 'sweetalert2'

function Login() {
    const navigate = useNavigate()

    const [email, setEMail] = useState("")
    const [password, setPassword] = useState("")

    const logIN = async () => {
        try {
            await signIN(email, password)
            navigate("/Product")
            Swal.fire("Logging sucess !")
        } catch (e) {
            Swal.fire(e.message)
        }
    }

    return (
        <>
            <div className="logi" >
                < div className="form" >
                    <p className="logo">Login</p>
                    <input type="email" onChange={(e) => setEMail(e.target.value)} value={email} placeholder="Email" required="" />
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" required="" />
                    <button onClick={logIN} className="login">Log-In</button>
                    <NavLink to={"/forget"} className={"a"} >Forgot Password ?</NavLink>
                    <hr />
                    <NavLink to={"/signUp"} className="create-account">Create New Account</NavLink>
                </div>
            </div>
        </>
    )
}

export default Login


