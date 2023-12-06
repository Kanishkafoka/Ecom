import React,{useState,useRef} from 'react'
import './component/net.css'
import useFileUpload from 'react-use-file-upload';


const Review = () => {

  const[data,setData]=useState([])
  const {
    files,
    fileNames,
    fileTypes,
    totalSize,
    totalSizeInBytes,
    handleDragDropEvent,
    clearAllFiles,
    createFormData,
    setFiles,
    removeFile,
  } = useFileUpload();

  const inputRef = useRef();

  const handleSubmit = async (e) => {
    setData(files);
    e.preventDefault();

    const formData = createFormData();

    // try {
    //   axios.post('https://some-api.com', formData, {
    //     'content-type': 'multipart/form-data',
    //   });
    // } catch (error) {
    //   console.error('Failed to submit files.');
    // }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(name == ""){
      seterrorName("required");
      
    }


    if(mail == ""){
      seterrorEmail("required");
      
    }
    else {
    
    if (!emailRegex.test(mail)) {
    alert("Please Enter Valid mail ID");
    return;
}
  
    }

    if(  name!==""&& mail!==""){
      if (emailRegex.test(mail)){
      alert("Thank You For Contacting Us !! Will Mail You As Soon As Possible");
      }
    }
    console.log("name:",name )
    console.log( "mail:",mail )
    console.log( "comments: ",comments)
    console.log('Submitted Rating:', rating);
  };
console.log(files,fileNames,fileTypes,totalSize,totalSizeInBytes)




const handleClear=()=>{
    clearAllFiles();
    setData([]);
}
    const [mail, setEmail]=useState("");
  const [name, setName]=useState("");
  const [comments, setComments] = useState('');
  const [errorComments, setErrorComments] = useState("");
  const [rating, setRating] = useState(0);
  const[errorEmail, seterrorEmail]= useState("");
  const[errorName, seterrorName]= useState("");




  const handleCommentsChange = (event) => {
    const inputValue = event.target.value;
    const wordCount = inputValue.split(/\s+/).length;

    if (wordCount > 30) {
      setErrorComments("Maximum 30 words allowed");
    } else {
      setComments(inputValue);
      setErrorComments("");
    }
  };

  
  const handleEmail=(m)=>{
    setEmail(m.target.value);
    seterrorEmail("")
  };

  const handlename=(e)=>{
    setName(e.target.value);
    seterrorName("")
  };


  

 const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };


//   const handleSubmit=()=>{
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if(name == ""){
//       seterrorName("required");
      
//     }


//     if(mail == ""){
//       seterrorEmail("required");
      
//     }
//     else {
    
//     if (!emailRegex.test(mail)) {
//     alert("Please Enter Valid mail ID");
//     return;
// }
  
//     }

//     if(  name!==""&& mail!==""){
//       if (emailRegex.test(mail)){
//       alert("Thank You For Contacting Us !! Will Mail You As Soon As Possible");
//       }
//     }
//     console.log("name:",name )
//     console.log( "mail:",mail )
//     console.log( "comments: ",comments)
//     console.log('Submitted Rating:', rating);
//   };
  return (
    <div className='re1'>


<div >
      

      <div className="form-container">
        {/* Display the files to be uploaded */}
       
     
      <div className="footer">
    
        <h2> Review here </h2>

        <div className='review'>

        <input type="Number" value={name} placeholder='Enter Number' onChange={(e)=>handlename(e)}/>
        <br/>
        <div> {errorName? <div>{errorName}</div>:null}</div>


        <input type="text" value={mail} placeholder='Enter mail' onChange={(m)=>handleEmail(m)}/>
         <div>{errorEmail? <div>{errorEmail}</div>:null}</div>

         <div >
          <ul>
            {fileNames.map((name) => (
              <li key={name}>
                <span>{name}</span>

                <span onClick={() => removeFile(name)}>
                  <i className="fa fa-times" />
                </span>
              </li>
            ))}
          </ul>

          {files.length > 0 && (
            <ul>
              <li>File types found: {fileTypes.join(', ')}</li>
              <li>Total Size: {totalSize}</li>
              <li>Total Bytes: {totalSizeInBytes}</li>

              <li className="clear-all">
                <button onClick={handleClear}>Clear All</button>
              </li>
            </ul>
          )}
        </div>


        <textarea value={comments} onChange={handleCommentsChange}  placeholder='Leave your comment here'  rows={1}/>
         <div>{errorComments ? <div>{errorComments}</div> : null}</div>
         <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleStarClick(star)}
                style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'black' }}  
              >
                &#9733;
              </span>
            ))}

          </div>

        {/* Provide a drop zone and an alternative button inside it to upload files. */}
        <div
          
          onDragEnter={handleDragDropEvent}
          onDragOver={handleDragDropEvent}
          onDrop={(e) => {
            handleDragDropEvent(e);
            setFiles(e, 'a');
          }}
        >
          <br/>
          <p className='drag'>upload image incase of any technical issue</p>

          <button onClick={() => inputRef.current.click()}>select files or image </button>

          {/* Hide the crappy looking default HTML input */}
          <input
            ref={inputRef}
            type="file"
            multiple
            style={{ display: 'none' }}
            placeholder='placeholder--'
            onChange={(e) => {
              setFiles(e, 'a');
            //   inputRef.current.value = null;
              
            }}
          />
        </div>

          
        <button onClick={handleSubmit}>SUBMIT</button>
        <button onClick={() => window.location.href = '/signup'}>SIGN UP</button>
        <button className='backk' ><a href='http://localhost:3000/ecom'> Back </a>  </button>
      </div>
      {data.length >0 ?(
        <img 
        src={URL.createObjectURL(files[0])}
        alt={files[0].name}
        height={200}
        width={100}/>
      ):(
        ""
      )}




          


        
      
    </div>


         

        
        
        </div>
        

        <div className='foot'>
        <h2>Questions? Call on 000-000-123</h2>
        <div className="row">
          <div className="col">
            <a href="#">Investor Test</a>
            <a href="#">Speed</a>
            <a href="#">Privacy</a>
            <a href="#">FAQ</a>
          </div>
          <div className="col">
            <a href="#">Help Center</a>
            <a href="#">Call Here</a>
            <a href="#">Error</a>
            <a href="#">Payment Issue</a>
          </div>
          <div className="col">
            <a href="#">Account</a>
            <a href="#">Account Details</a>
            <a href="#">Privacy</a>
            <a href="#">Terms and conditions</a>
          </div>
          <div className="col">
            <a href="#">Media</a>
            <a href="#">Corporate Info</a>
            <a href="#">FAQ</a>
            <a href="#">Settings</a>
          </div>
        </div>
        </div>
      </div>
      <nav>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Use</a></li>
        </ul>
      </nav>
    

    
    </div>
  )
}

export default Review
