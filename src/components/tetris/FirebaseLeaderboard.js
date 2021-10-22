import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { addDoc,collection,getFirestore,serverTimestamp,query,getDocs,orderBy,limit} from "firebase/firestore";
const auth = getAuth();
let userId = '';
let displayName = '';
const db = getFirestore();
onAuthStateChanged(auth,(user=>{
    userId = user ? user.uid : '';
    displayName = user ? user.displayName : '';
}))
export const addScoreonLeaderBoard = async(score)=>{
// insert Leaderboard score in Firebase Database document based on userID or for specific user 
        const gameScoreData = {score:score,displayName:displayName,userId:userId,timestamp:serverTimestamp()}
        await addDoc(collection(db,`forum/${userId}/personalScore`),gameScoreData);
}
export const getMyScoreList = async()=>{
    if (userId !== ''){
        // get the document reference for a specific user 
    const docRef = collection(db,`forum/${userId}/personalScore`);
    // create a query from the document reference 
    const q = query(docRef,orderBy("score","desc"),limit(50));
    // get all document records from firebase store based on query
    const querySnapshot = await getDocs(q);
    let results = []
    // insert all document data in react array object
    querySnapshot.forEach((doc)=>{
            results.push(doc.data())
    })
    // return array object from here
    return results;
    }
    return [];
}