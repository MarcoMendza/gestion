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
            url: "/Aztecas.png"
        },
        {
            id: "pair2",
            text: "La Guerra de Intervención Estadounidense en México (1846-1848)",
            url: "/Estadounidense.png"
        },
        {
            id: "pair3",
            text: "La Cultura Olmeca",
            url: "/Olmecas.png"
        },
        {
            id: "pair4",
            text: "Pirámide de Kukulkán en Chichén Itzá",
            url: "/Piramide.png"
        },
        {
            id: "pair5",
            text: "El Porfiriato (1876-1911)",
            url: "/Porfiriato.png"
        },
        {
            id: "pair6",
            text: "La Época Colonial en México (1521-1821)",
            url: "/Colonial.png"
        },
        {
            id: "pair7",
            text: "La Revolución Mexicana (1910-1917)",
            url: "/Revolucion.png"
        },
        {
            id: "pair8",
            text: "La Independencia de México (1810-1821)",
            url: "/Independencia.png"
        }
    ];


    //return pairs;
}