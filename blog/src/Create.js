import { useState } from "react";
import { useHistory } from 'react-router-dom';
const Create = () => {
    const[title, setTitle] = useState('');  
    const[body, setBody] = useState('');  
    const[author, setAuthor] = useState('mario');
    const[isPending, setIsPending] = useState(false);
    const history = useHistory(); //accesses history like the back and forwar arrows

    const handleSubmit = (e) =>{ //preventDefault makes it not refresh, and then blog is an object created
        e.preventDefault()
        const blog = {title, body, author};
        setIsPending(true)
        fetch('http://localhost:8000/blogs', { //posts the new blog into json
            method:'POST',
            headers: {"Content-Type": "applicatoin/json"}, 
            body: JSON.stringify(blog)
        }).then(()=> {
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>add a new blog</h2> 
            <form onSubmit={handleSubmit}> {/* form has onsubmit function whenever a button is clicked inside */}
                <label>Blog title:</label>
                <input 
                    type = "text"
                    required
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                    />
                <label>Blog body:</label>
                <textarea
                    required
                    value = {body}
                    onChange = {(e) => setBody(e.target.value)}
                    />
                <label>Blog author:</label>
                <select
                    value = {author}
                    onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option value = "mario">mario</option>
                    <option value = "yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabeled>Adding blog ...</button>}
            </form>
        </div>
     );
}
 
export default Create;