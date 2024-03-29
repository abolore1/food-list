import { useHistory,useParams } from "react-router-dom/cjs/react-router-dom";

import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory()
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

  const handleDelete=()=>{
   fetch(`http://localhost:8000/blogs/${blog.id}`,{
    method:'DELETE',
   }).then(()=>{
     history.push('/')
   })

  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2> {blog.title }</h2>
          <p> Written by {blog.author}</p>
          <img alt="" src={blog.imgDataArray} />
          <div className="body-content">{blog.body }</div> 
          <p><button onClick={handleDelete}>Delete</button></p>
        </article>
      )}
      
    </div>
  );
}
 
export default BlogDetails;