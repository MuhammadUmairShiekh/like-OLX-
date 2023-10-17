import React from "react";
import { getData } from "../config.js/firebase";
import { useState, useEffect } from "react";
import Card from "./Card";
import { NavLink } from "react-router-dom";

function Product() {
    const [ads, setAds] = useState([]);
    const [input, setInput] = useState("")

    useEffect(() => {
        getAds()

    }, [])

    const getAds = async () => {
        const adsData = await getData()
        setAds(adsData)
        // console.log(adsData)
    }
    if (!ads.length) {
        return <div className='loader' ></div>
    }

    const seach = () => {
       
        

    }
    return (
        <div>
           
            <div className="inp" >
                <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder="Searh Yout Product" />
                <button onClick={seach} >Seach</button>
                <button className="btn1">
                    <NavLink className="btn3" to={"/PostAd"}>Sell</NavLink>
                </button>
            </div>

            <div className="produc" >
                <h1>Product Page</h1>
                <select  >
                    <option selected disabled >Items-Category</option>
                    <option>All</option>
                    <option>Electronic</option>
                    <option>Vehicle</option>
                    <option>Mobile Phone</option>
                    <option>Laptop</option>
                    <option>Animals</option>
                    <option>Bike</option>
                </select>
            </div>

            <div className="main" >

                {
                    ads.map(items => {
                        return <>
                            <Card tittle={items.tittle} price={items.price} images={items.image}
                                btn={("/Product/") + items.id} btn1={"Detail"} descrip={items.category}
                            />


                        </>
                    })

                }
            </div>


        </div>

    )
}

export default Product 