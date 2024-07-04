import React,{useState,useRef} from 'react'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from './utils/Firebase';
import "./Login.css"
import Header from './Header'
import { checkValidData } from './utils/Validate';
import { BG_URL, USER_AVATAR } from './utils/constant';
import { useDispatch } from 'react-redux';
import { addUser } from './utils/userSlice';


const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errMessage, setErrMessage] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    // const navigate = useNavigate()
    const Email = useRef(null);
    const Password = useRef(null);
    const Name = useRef(null);
    const dispatch = useDispatch()

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };
    
    const toggleSingInForm = ()=>{
        setIsSignInForm(!isSignInForm)
    }
    
    const handleButtonClick =()=>{

// validate the form data
// const name = Name.current.value
const email =Email.current.value
const password = Password.current.value
const message = checkValidData(email,password)
setErrMessage(message)
if (message) return;
console.log(message)


// sing in sign up logic

if(!isSignInForm){
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)

    updateProfile(user, {
      displayName: "Shubham", photoURL: USER_AVATAR
    }).then(() => {
      // Profile updated!
      const {uid, email, displayName,photoURL} = auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
      // ...
    }).catch((error) => {
      // An error occurred
      setErrMessage(error.message)
      // ...
    });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMessage(errorCode + "-" + errorMessage)
    // ..
  });
}else{


  // sign in logic
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    console.log(error);
    let errorCode = error.code;
    errorCode = "User not found.";
    let errorMessage = error.message;
    errorMessage = " Please Sign-up if you are a new user";
    setErrMessage(errorCode + `\t` + errorMessage);
  });
}



    }
  return (
    <div >
   <Header/>
   <div className='login'>
  
   <div className="absolute bg-color login-back"> 
   <img className='wallpaper'
   src={BG_URL}
   alt="photo"
   />
   </div>
 <form
 onSubmit={(e) => e.preventDefault()}
//  className="w-3/12 absolute p-12 bg-black bg-opacity-75 my-36 mx-auto right-0 left-0 text-white rounded-[4px]"
 className="form"
>
 <h1 
 className="sign-out"
//  className="font-bold text-3xl py-4"
 >
   {" "}
   {isSignInForm ? "Sign In" : "Sign Up"}
 </h1>
 {!isSignInForm && (
   <input
     ref={Name}
     type="text"
     placeholder="Full Name"
     className="myinput"
    //  className="p-4 my-4 w-full bg-[#333] rounded-[4px]"
   />
 )}
 <input
   ref={Email}
   type="text"
   placeholder="Email Address"
   className="myinput"
  //  className="p-4 my-4 w-full bg-[#333] rounded-[4px]"
 />
 <input
   ref={Password}
   type={showPassword ? 'text' : 'password'}
   placeholder="Password"
   className="myinput"
  //  className="p-4 my-4 w-full bg-[#333] rounded-[4px] "
 />


 <button
  //  className="p-4 my-6 bg-[#e50914] w-full rounded-[4px] cursor-pointer"
   className="login-btn"
   onClick={handleButtonClick}
 >
   {isSignInForm ? "Sign In" : "Sign Up"}
 </button>
 <p 
 className="error-msg"
 >
  { /*{!isSignInForm ? errMessage : null}*/}
  {errMessage}
 </p>
<div className='show-pass' >
<input
type="checkbox"
id="showPassword"
checked={showPassword}
onChange={handleCheckboxChange}
/>
<p>show password</p>
</div>
 <div className="py-4 cursor-pointer" onClick={toggleSingInForm}>
   {isSignInForm ? (
     <p>
       <span className="text-[#737373]">New to Netflix?</span> Sign Up
       Now
     </p>
   ) : (
     <p>
       {" "}
       <span className="text-[#737373]">Alredy registerd?</span> Sign In
       Now
     </p>
   )}{" "}
 </div>
</form>
</div>
    </div>
  )
}

export default Login