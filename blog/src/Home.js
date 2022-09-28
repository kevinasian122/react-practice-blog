import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);
    
  useEffect(() => { //useEffect fires here only when dom renders at the start, the code inside is json code
    fetch('http://localhost:8000/blogs')
      .then(res => {
        if(!res.ok){ //the res object has a 'ok' property, so if no data fetched, ok is false
            throw Error('could not fetch data'); //creates error to be caught in .catch(err)
        }
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => { //catch catches any error and fires a function when it does
        setError(err.message);
        setIsPending(false);
      })
  }, [])

  return (
    <div className="home">
        {error && <div>{error}</div> }
        {isPending && <div>loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}
 
export default Home;