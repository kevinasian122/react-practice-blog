import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams() //Gets the ID from app.js
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/'+id);
    {/*uses useFetch hook again, just pass in endpoint and it returns all this data, 
        btw data:blog is just calling data "blog" here*/}
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>Error</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>

                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;