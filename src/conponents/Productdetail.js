import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getIdData } from "../config.js/firebase";
import Detail from "./Detail";

// const db = getFirestore();
// const docRef = doc(db, "Ads", "0scB2MXsneFjrRqsaKLm");
// const docSnap = await getDoc(docRef)
// return docSnap.data()
// console.log(docSnap.data());

function Productdetail() {
    const [detail, setDetail] = useState('')
    const { id } = useParams()


    useEffect(() => {
        getAds()

    }, [])

    const getAds = async () => {
        const adsData = await getIdData() 
        setDetail(adsData)



    }


    // if (!detail.length) {
    //     return <div className='loader' ></div>
    // }

    return (
        <>
            <h1>Detail Page</h1>
           
            <Detail mobile={"92"+detail.number  }  descrip={detail.descrip} images={detail.image} tittle={detail.tittle} price={detail.price} />


        </>
    )
}

export default Productdetail