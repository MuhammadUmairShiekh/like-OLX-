import React from "react";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";




function Forgetps() {
    const [email, setEmail] = useState("")
    const navigate = useNavigate()
    // const [loading , setLoading] = useState(false)

    const forGetpas =  async () => {
        const auth = getAuth();
        try{
        await sendPasswordResetEmail(auth, email)            
                Swal.fire("Check Your Email ")
                setEmail(" ")
                navigate("/")

                // setLoading(true)
            }catch(e) {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                Swal.fire(e.message)

            }
    }
    // if (loading) {
    //     return <div className='loader' ></div>
    // }
    return (
        <>
            <div className="logi" >
                < div className="form" >
                    <p className="logo">Forget Password</p>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Password Email" required="" />
                    <button onClick={forGetpas} className="login">Forget</button>

                </div>
            </div >
        </>
    )
}

export default Forgetps