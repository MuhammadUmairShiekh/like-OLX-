// import { NavLink } from "react-router-dom"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { postAds } from "../config.js/firebase"
import Swal from 'sweetalert2'

function PostAd() {
    const [tittle, settittle] = useState("")
    const [descrip, setDescrip] = useState("")
    const [price, setPrice] = useState("")
    const [number, setNumber] = useState("")
    const [category, setCategory] = useState("")
    const [file, setFile] = useState("")
    const [loading, setLoading] = useState(false)


    const resgisterAcct = async () => {
        if (tittle == "" || category == " " || descrip == "" || price == "" || file == " ") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
        else {
            setLoading(true)
            await postAds({ tittle, category, descrip, price, number , file: file[0] })
            settittle("")
            setDescrip("")
            setPrice("")
            setCategory("")
            setNumber("")
            setLoading(false)
        }

    }
    if (loading) {
        return <div className='loader' ></div>
    }
    return (
        <>
            <div className="ads" >
                <NavLink className="btn2" to={"/product"}>Go Back</NavLink>

                < div className="form1" >
                    <p className="logo">Post Your Ad</p>
                    <label>Tittle</label>
                    <input type="text" onChange={(e) => settittle(e.target.value)} value={tittle} placeholder="Product Tittle" required="" />
                    <label>Category</label>
                    <select onChange={e => setCategory(e.target.value)} value={category}  >
                        <option selected disabled >Items-Category</option>
                        <option>Electronic</option>
                        <option>Vehicle</option>
                        <option>Mobile Phone</option>
                        <option>Laptop</option>
                        <option>Animals</option>
                        <option>Bike</option>
                    </select>
                    <label>Description</label>
                    <textarea rows="4" cols="50" onChange={(e) => setDescrip(e.target.value)} value={descrip} placeholder="Product Descrip" required="" > </textarea>
                    <label>Mobile No</label>
                    <input type="number" onChange={(e) => setNumber(e.target.value)} value={number} placeholder="Enter Mobile Number" required="" />
                    <label>Price</label>
                    <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} placeholder="Product Price" required="" />
                    <input type="file" className="file" onChange={(e) => setFile(e.target.files)} required="" />
                    <button onClick={resgisterAcct} className="login">Submit</button>
                    <hr />

                </div>
            </div>
        </>
    )
}

export default PostAd


