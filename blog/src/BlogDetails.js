import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams() //Gets the ID from app.js
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/'+id);
    {/*uses useFetch hook again, just pass in endpoint and it returns all this data, 
        btw data:blog is just calling data "blog" here*/}
    const history = useHistory();
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method:'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>Error</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick = {handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;