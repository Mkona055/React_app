import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { useHistory} from "react-router-dom";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const BlogList = ({blogs, title}) => {
    const history = useHistory();
    const handleClick = () => {
            history.push('/create')
        }
  
    
    return (  
        <div className="content">
            <p className = "title">TROUVER DES JOUEURS</p>
            <div className="blog-list">
                <label className="programs"> {title}</label>
                <div className="addPost">
                    <Button variant="warning" className= "addPost" onClick={handleClick}>Ajouter un post</Button>
                </div>
               
                    { blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to = {`blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p className="form-label"> Date du match: {blog.matchDate.split("T")[0]}</p>
                        <p className="form-label"> Nombre de joueurs manquants:  {blog.number}</p>
                        <p className="form-label"> Écrit par: {blog.author}</p>
                        </Link>  
                            
                    </div>              
                ))}
            </div>
        </div>
            
        
    );
}
 
export default BlogList;