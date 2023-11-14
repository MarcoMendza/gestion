import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"

export const loadPairs = async() => {

    /*const collectionRef = collection( FirebaseDB, 'memory');
    const docs = await getDocs( collectionRef );

    const pairs = []

    docs.forEach( doc => {
        pairs.push({id: doc.id, ...doc.data() })
    })*/

    //console.log( pairs )

    return [
        {
            id: "pair1",
            text: "Los Aztecas y Tenochtitlán",
            url: "https://res.cloudinary.com/drgvmw4ae/image/upload/v1699808483/history/download_3_w2ryiy.png"
        },
        {
            id: "pair2",
            text: "La Guerra de Intervención Estadounidense en México (1846-1848)",
            url: "https://res.cloudinary.com/drgvmw4ae/image/upload/v1699808484/history/download_7_xldy2r.png"
        },
        {
            id: "pair3",
            text: "La Cultura Olmeca",
            url: "https://res.cloudinary.com/drgvmw4ae/image/upload/v1699808483/history/download_6_y2jzb8.png"
        },
        {
            id: "pair4",
            text: "Pirámide de Kukulkán en Chichén Itzá",
            url: "https://res.cloudinary.com/drgvmw4ae/image/upload/v1699808479/history/download_1_h3vsia.png"
        },
        {
            id: "pair5",
            text: "El Porfiriato (1876-1911)",
            url: "https://res.cloudinary.com/drgvmw4ae/image/upload/v1699811463/download_8_f7u3o6.png"
        },
        {
            id: "pair6",
            text: "La Época Colonial en México (1521-1821)",
            url: "https://res.cloudinary.com/drgvmw4ae/image/upload/v1699808481/history/download_4_oyxmwv.png"
        },
        {
            id: "pair7",
            text: "La Revolución Mexicana (1910-1917)",
            url: "https://res.cloudinary.com/drgvmw4ae/image/upload/v1699808482/history/download_2_mfrndr.png"
        },
        {
            id: "pair8",
            text: "La Independencia de México (1810-1821)",
            url: "https://res.cloudinary.com/drgvmw4ae/image/upload/v1699808465/history/download_kfxvls.png"
        }
    ];


    //return pairs;
}