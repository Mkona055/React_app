import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const BlogDetails = () => {
    const{ id } = useParams();
    const {data:blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleClick = () => {
        history.push('/searchplayers')
    }
    return (
        <div className="content">
            <p className = "title">TROUVER DES JOUEURS</p>
            <label className="programs"> Post sélectionné</label>
            <div className="blog-details">
            {isPending && <div> Chargement du post...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article className ="form-label">
                    <h2>{blog.title}</h2>
                    <p><i>Écrit par {blog.author}</i></p>
                    <div>{blog.body}</div>
                    <Button variant="success" onClick={handleClick}>Retour vers les posts</Button>
                </article>
            )}
            </div>
        </div>
        
      );
}
 
export default BlogDetails;