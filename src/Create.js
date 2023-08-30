import { useState } from "react";
import {useHistory} from "react-router-dom";

const Create = () => {
  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');
  const [author,setAuthor] = useState('Bakry');
  const [isPending,setIsPending] = useState(false);
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const history = useHistory();
  
   
  const onChangePicture = e => {
    if(e.target.files[0]){
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit=(e)=>{
      e.preventDefault();
      const blog ={title,body,author,imgData};
      setIsPending(true);
      console.log(blog)
      if (!imgData) {
        return;
      }
      
    fetch('http://localhost:8000/blogs/',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(blog)
    }).then(()=>{
      console.log('New Blog Added')
      setIsPending(false);
      history.push('/')

    })
  }
  
  return ( 
    <div className="create"> 
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog:title</label>
        <input required type="text"  onChange={(e)=> setTitle(e.target.value)} />
        <label>Blog body:</label>
        <textarea required  onChange={(e)=> setBody(e.target.value)}></textarea>
        <label>Blog author:</label>
        <select  onChange={(e)=> setAuthor(e.target.value)}>
          <option value='Bakry'>Bakry</option>
          <option value='Qudus'>Qudus</option>
          <option value='Mario'>Mario</option>
          <option value='Ninja'>Ninja</option>
        </select> 
        <label>Blog:image</label>
        <input required type="file" multiple accept="image/*" onChange={onChangePicture} />
         {!isPending && <button>Add blog</button>}
         {isPending && <button disabled>Adding blog...</button>}
          <br />
          <br />
          <hr />
         <p>{title}</p>
         <p>{body}</p>
         <p>{author}</p>
         <img height='100' alt="" src={imgData} />
      </form>
    </div>
  );
};

export default Create;
