import {useState, useEffect} from 'react'
import {projectFirestore} from '../firebase/config'

const useFirestore = collection => {
    const [docs, setDocs] = useState([])
    
    useEffect(()=>{
        const unsubscribe  = projectFirestore.collection(collection) // get collection
            .orderBy('createdAt', 'desc') // the newest at the top
            .onSnapshot(snap => { // // Listen for document metadata changes
                let documents = []
                snap.forEach(doc => { // cycling through all the docs
                    documents.push({...doc.data(), id: doc.id}) 
                    // Appends new document to an array
                    // ...doc.data() => get each properties (url, createdAt)
                })
                setDocs(documents)
            })
        
        return () => unsubscribe() 
        // clean-up function(componentsWillUnmout)
        // Stop listening to changes ; (ImageGrid가 언마운트 되면) 더 이상 데이터를 수신 대기할 필요가 없으므로 이벤트 콜백이 호출되지 않도록 리스너를 분리

    },[collection])

    return { docs }
}

export default useFirestore