import { Link } from "react-router-dom/cjs/react-router-dom.min"
import {Card} from 'react-bootstrap';
const NotFound = () => {
    return ( 
        <div className="not-found"><br/>
            <Card className="notFound h-100">
                <Card.Body>
                    <p>Mince vous avez tiré à coté de la cage! Cette page n'existe pas malheuresement.</p>
                    <Link to="/" className="connexion"> Revenir à l'accueil</Link>
                </Card.Body>   
            </Card>
            
            <br></br>
            
        </div>
     );
}
 
export default NotFound;