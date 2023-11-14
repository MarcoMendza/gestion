import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"

export const loadQuestions = async() => {

    const collectionRef = collection( FirebaseDB, 'trivia');
    const docs = await getDocs( collectionRef );

    const questions = []

    docs.forEach( doc => {
        questions.push({id: doc.id, ...doc.data() })
    })

    return questions;
}