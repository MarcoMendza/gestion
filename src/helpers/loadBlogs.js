import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"

export const loadBlogs = async() => {

    const collectionRef = collection( FirebaseDB, 'blog');
    const docs = await getDocs( collectionRef );

    const blogs = []

    docs.forEach( doc => {
        blogs.push({id: doc.id, ...doc.data() })
    })

    return blogs;
}