import React from "react";
import { getData } from "../config.js/firebase";
import { useState, useEffect } from "react";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Product() {
    const [ads, setAds] = useState([]);
    const [input, setInput] = useState("")


    // const location = useLocation()
    // console.log(location)
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


    // getFilteredList()
    return (
        <div>

            <div className="inp" >
                <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder="Searh Yout Product" />
                <button >Seach</button>
                <button className="btn1">
                    <NavLink className="btn3" to={"/PostAd"}>Sell</NavLink>
                </button>
            </div>

            <div className="produc" >
                <h1>Product Page</h1>
                <select   >
                    <option selected disabled >Items-Category</option>
                    <option value={""} >All</option>
                    <option value={"Electronic"}   >Electronic</option>
                    <option value={"Vehicle"} >Vehicle</option>
                    <option value={"Mobile Phone"} >Mobile Phone</option>
                    <option value={"Laptop"} >Laptop</option>
                    <option value={"Animals"} >Animals</option>
                    <option value={"Bike"} >Bike</option>
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