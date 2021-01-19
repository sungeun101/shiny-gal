import {useState, useEffect} from 'react'
import {projectFirestore, projectStorage, timestamp} from '../firebase/config'

const useStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    // run on file changes 
    useEffect(()=>{
        // Create a root reference
        const storageRef = projectStorage.ref(file.name) 
        const collectionRef = projectFirestore.collection('images')

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        storageRef.put(file).on('state_changed', snapshot => { 
        // put() : upload file to the reference
        //'state_changed' observer, called any time the state changes
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100 // Get task progress
            setProgress(percentage)
        }, error => { // Handle unsuccessful uploads
            setError(error)
        }, async() => {  // Handle successful uploads
            const url = await storageRef.getDownloadURL()
            const createdAt = timestamp()
            collectionRef.add({url, createdAt}) // Add a new document to this collection with the specified data
            setUrl(url)
        })
    }, [file])

    return {progress, url, error}
}

export default useStorage