import { initializeApp } from
    "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword }
    from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc } from
    "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import Swal from 'sweetalert2'

const firebaseConfig = {
    apiKey: "AIzaSyCF_-5AGvl0bzGARd15pUrxsAt0jo8Ak1A",
    authDomain: "mini-project-33f58.firebaseapp.com",
    projectId: "mini-project-33f58",
    storageBucket: "mini-project-33f58.appspot.com",
    messagingSenderId: "223102568871",
    appId: "1:223102568871:web:8b8b2039d1425c1b154e82"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);



async function register(email, password, fullName, lastName) {
    try {
        await createUserWithEmailAndPassword(auth, email, password, fullName, lastName)
        await addDoc(collection(db, "users"), {
            fullName,
            lastName,
            email
        });
        Swal.fire("Acct Created !")

    } catch (e) {

        Swal.fire(e.message)
    }


}
function signIN(email, password) {
    return signInWithEmailAndPassword(auth, email, password)

}

async function postAds({ tittle, descrip, category, price, file , number}) {
    try {
        const url = await uploadImages(file)
        const data = { tittle, descrip, category, number: +number,  price: +price, image: url }
        await addDoc(collection(db, "Ads"), data);
        Swal.fire({
            icon: 'success',
            title: 'Posted...',
            text: 'Your Ad Has been Post!',
        })
    } catch (e) {
        Swal.fire(e.message)
    }
}

async function uploadImages(file) {

    const storageRef = ref(storage, 'AdsImage/' + file.name);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef)
    return url

}
async function getData() {
    const querySnapshot = await getDocs(collection(db, "Ads"));    
    const Ads = []
    querySnapshot.forEach((doc) => {
        const data = doc.data()
        data.id = doc.id
        Ads.push(data)
        // console.log(doc.id, " => ", doc.data());
        // console.log(doc.id, " => ", doc.data());
        // console.log(data)
    });
    return Ads

}

async function getIdData() {
    const docRef = doc(db, "Ads" , "ZY7f2Ds8UtwF56UdmQAX");
    const docSnap = await getDoc(docRef)
     return docSnap.data()
    // console.log(docSnap.data());
}

export {
    register,
    signIN,
    postAds,
    getData,
    getIdData

}