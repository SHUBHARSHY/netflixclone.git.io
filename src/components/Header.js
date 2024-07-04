import React,{useEffect} from 'react'
import { LOGO, SUPOORTED_LANGUAGES } from './utils/constant'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addUser, removeUser } from './utils/userSlice';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './utils/Firebase';
import { toggleGptSearchView } from './utils/gptSlice';
import { changeLanguage } from './utils/configSlice';
import "./Header.css"
const Header = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
const user = useSelector((store) => store.user);
const showGptSearch =useSelector((store)=>store.gpt.showGptSearch)
const {id} = useParams()
const handleSignOut = () => {
  signOut(auth)
};



  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
       if (user) {
         // User is signed in, see docs for a list of available properties
         // https://firebase.google.com/docs/reference/js/auth.user
         const {uid, email, displayName,photoURL} = user;
         dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
          
         navigate("/browse") 
         // ...
       } else {
         // User is signed out
         // ...
         dispatch(removeUser())
         navigate("/")
       
       }
     });
 
     // unsubscribe when my component will unmount
     return ()=>unsubscribe()
   },[])


const handleGptSearchClick=()=>{
  //toggle gpt search

  dispatch(toggleGptSearchView( ))
}

const handleLanguageChange =(e)=>{
   dispatch(changeLanguage(e.target.value))
}


// window.addEventListener('scroll', function() {
//   let header = document.querySelector('header');
//   console.log(header)
//   header.classList.toggle('sticky', window.scrollY > 0);
// });

  return (
    <header  
    >
    <div className="header">
    <img  
    className="logo"
    src={LOGO} alt='logo'/>

    {user && <div 
      className="right-head">

    {showGptSearch && <select 
      className="language"
      onChange={handleLanguageChange}>
      {SUPOORTED_LANGUAGES.map(lang=> <option value={lang.identifier}>{lang.name}</option>)}
      </select>}


   
    <button onClick={handleGptSearchClick} 
    className="gpt-page"
    > {showGptSearch ?"Homepage":<div className='Search'><i class="fa-solid fa-magnifying-glass"></i> <p>Search</p></div>}</button>
       
    
    <div className='right-right-head'>
    
    <img
    className="w-8 h-8 rounded-[4px] mt-1"
    src={user.photoURL}alt="usericon"
    />
    
    <button 
    className='sign-in'
    onClick={handleSignOut}>
    Sign Out
    </button>
    </div>
    </div>}
    </div>
    </header>
    )
}

export default Header