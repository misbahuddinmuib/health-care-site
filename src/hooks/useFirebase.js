import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut,createUserWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";


initializeAuthentication();


const useFirebase =()=>{
    const [user,setUser] =useState({});
    const [email,setEmail] =useState('');
    const [password,setPassword]=useState('');
    const [isLoading, setIsLoading]= useState(true);
    const auth = getAuth();


    const handleEmailChange =e =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange =e =>{
        setPassword(e.target.value)
    }

    const handleRegistration =e=>{
        
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
             setUser(result.user);
           
        })
        e.preventDefault();
    }
   

    const signInUsingGoogle=()=>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
    return  signInWithPopup(auth,googleProvider)
       .finally(()=> setIsLoading(false));

    }
    
    
// observe user state change
    useEffect(()=>{
       const unsubscribed= onAuthStateChanged(auth,user=>{
          if(user){
            setUser(user);

          } 
          
          else{
              setUser({})
          } 
          setIsLoading(false);
        });
        return ()=> unsubscribed;

    },[])
    const logOut =()=>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{})
        .finally(()=>setIsLoading(false));
    }


    return {
       user,
       isLoading,
       signInUsingGoogle,
       logOut,
       handleEmailChange,
       handleRegistration,
       handlePasswordChange,
       createUserWithEmailAndPassword,


    }
}
export default useFirebase;