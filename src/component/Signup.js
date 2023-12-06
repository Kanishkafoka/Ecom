import React, { useState } from 'react'  
import './Signup.css'
 



const Signup = () => {
  const [name, setName]=useState("");
  const [mail, setEmail]=useState("");
  const [num, setNum]=useState("");

  const[errorName, seterrorName]= useState("");
  const[errorEmail, seterrorEmail]= useState("");
  const[errorNum, seterrorNum]= useState("");
 
  


  
  

  const handlename=(e)=>{
    setName(e.target.value);
    seterrorName("")
  };

  const handleEmail=(m)=>{
    setEmail(m.target.value);
    seterrorEmail("")
  };

  const handleNum=(n)=>{
    setNum(n.target.value);
    seterrorNum("")
  };

  const handleSubmit=()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(name == ""){
      seterrorName("required")
    }
    if(mail == ""){
      seterrorEmail("required");
    }
    if(num == ""){
      seterrorNum("required");
    }
    else {
    
    if (!emailRegex.test(mail)) {
    alert("Please enter a valid email address.");
    return;
}
  
    }

    if(name!==""&& mail!=="" && num!==""){
      if (emailRegex.test(mail)){
        
      alert("THANK YOU FOR VISTING ");
      }
    }
    console.log("Name:",name,"E-Mail : ",mail,"Number: ",num)


  };
  


  // const history = useHistory();
  // const goBack = () => {
  //   history.push('/signup');
  // }
  
  return (
    <div className='form2'>
    <div className='form1'>
      <img src='https://northernvirginiamag.com/wp-content/uploads/2020/08/movie-popcorn.jpg' alt="" />
  <div className='form'>

    


<form
  action="https://formspree.io/f/xvojjzny"
  method="POST"
>

  <input type="text" value={name} placeholder='enter name' onChange={(e)=>handlename(e)}/>
<br/>
<div> {errorName? <div>{errorName}</div>:null}</div>
  <label>
    
    <input type="email" name="email" placeholder='enter Email'/>
  </label>
  
  <input type="number" value={num} placeholder='enter number' onChange={(n)=>handleNum(n)}/>
<br/>
<div> {errorNum? <div>{errorNum}</div>:null}</div>

  
           

  
  <button type="submit">Sign Up</button>
<button >  <a href='http://localhost:3000/ecom'>  Go Back </a> </button>
</form>



    </div>
    </div>
    </div>
    
  )
} 
    
export default Signup






