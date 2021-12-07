import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { addDoc,getDoc,collection,getFirestore,serverTimestamp,query,getDocs,orderBy,limit,setDoc,doc} from "firebase/firestore";
const auth = getAuth();
let userId = '';
let userName = '';
const db = getFirestore();
// gettng the userid and username from login state based on userlogin and we are passing both
// variable values  in the learderboard score to show username on list page 
onAuthStateChanged(auth,(user=>{
    userId = user ? user.uid : '';
    userName = user ? user.displayName : '';
}))
export const addScoreonLeaderBoard = async(score)=>{

    
// insert Leaderboard score in Firebase Database document based on userID or for specific user 
// we are checking if the user never enter any name then we are passing anonymous  otherwise we are
// passing the correct name of the user
        if(userName === ""){ userName = "Anonymous";}
        // generating gameScoreData that the user name and gameScoreData 
        const gameScoreData = {score:score,userName:userName,userId:userId,timestamp:serverTimestamp()}
        await addDoc(collection(db,`forum/${userId}/personalScore`),gameScoreData);
        // set score for individual game point for specific user
        await setDoc(doc(db,"forum/default/IndividualGamePoints",userId),gameScoreData);

        //**Leader board highet score for invidual game */
        const docRef = doc(db,'forum/default/HigherScoreGamePoint',userId);
        const docSnap = await getDoc(docRef);
        let highScore = 0;
        if(docSnap.exists()){
            highScore = parseInt(docSnap.data().score);
        }
        if(score >= highScore){
            await setDoc(doc(db,"forum/default/HigherScoreGamePoint",userId),gameScoreData);
        }
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
export const getInvidualGameScore = async()=>{
    // get document reference for a specific game point for a user

    const docRef = collection(db,"forum/default/IndividualGamePoints");
    // manipulate query to get data from firebase  database restore
    const q = query(docRef,orderBy("score","desc"),limit(50))
    // get all json document from firebase database restore
    // pushing query into results so that we are able to use this result in react
    const querySnapshot = await getDocs(q);
    // react array object to populate the result
    let results = [];
    querySnapshot.forEach((doc)=>{
        // pushing each record into result array
        results.push(doc.data());
    })
    // returning the value for react 
    return results;
}
export const GetHighestScores = async()=>{
    const highRef = collection(db,"forum/default/HigherScoreGamePoint");
    const q = query(highRef,orderBy("score","desc"),limit(50));
    const querySnapshot = await getDocs(q);
    let results = [];
    querySnapshot.forEach((doc)=>{
        results.push(doc.data());
    })
    return results;
}