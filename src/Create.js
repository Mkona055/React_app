import { useHistory } from "react-router-dom";
import { useState } from "react";
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import fr from 'date-fns/locale/fr';
registerLocale('fr', fr);


const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [number, setNumber] = useState(1);
    const [author, setAuthor] = useState('');
    const [matchDate, setMatchDate] = useState(null);
    const [validated, setValidated] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const isValidDate = (date) => {
      const today = new Date();
      var isValid = false;
      if(today.getFullYear() < date.getFullYear()){
          isValid = true;
      }else if (today.getFullYear() === date.getFullYear()) {
          if (today.getMonth() < date.getMonth()){
              isValid = true;
          }else if (today.getMonth() === date.getMonth()){
              if(today.getDate() <= date.getDate()){
                  isValid = true;
              }
          }
      }
      
      return isValid;  
    };
    const handleSubmit = (e) => {


      const form = e.currentTarget;
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
        setValidated(true);
      }else{
        e.preventDefault();
        const post = { title, body, author, number, matchDate };
        setIsPending(true);

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers:{ "Content-Type": "application/json"},
            body: JSON.stringify(post)
        }).then(() => {
            setIsPending(false);
            console.log('new post added');
            history.push('/searchplayers');
        })    
    }    
        
  }
    return ( 
    <div className="content">

      <div className="">
        <p className = "title">TROUVER DES JOUEURS</p>
        
      </div>

      <div className="create">
      <p className="addLabel" > Ajouter un nouveau post de recherche de joueurs</p>
        <Form noValidate className ="createPost" validated={validated} onSubmit={handleSubmit}>
          <Form.Group  controlId="validationCustom02">
                <Form.Label>Titre:</Form.Label>
                {/* <Form.Label>{nom}</Form.Label> */}
                <Form.Control
                    required
                    type="text"
                    placeholder="Entrez le titre du post"
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                    size="lg"
                                  
                />
                <Form.Control.Feedback type="invalid">Veuillez remplir ce champ avec uniquement des lettres</Form.Control.Feedback>
            </Form.Group>
          <Form.Group  controlId="validationCustom01">
              <Form.Label>Auteur du post:</Form.Label>
              {/* <Form.Label>{nom}</Form.Label> */}
              <Form.Control
                  required
                  type="text"
                  pattern="([A-Za-z](\s)?)+"
                  placeholder="Entrez votre nom"
                  value = {author}
                  onChange = {(e) => setAuthor(e.target.value)}
                  size="lg"
                                
              />
              <Form.Control.Feedback type="invalid">Veuillez remplir ce champ avec uniquement des lettres</Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
              <Form.Label>Nombre de joueurs recherchés:</Form.Label>
              {/* <Form.Label>{email}</Form.Label> */}
              <Form.Control
                  required
                  type="number"
                  value = {number}
                  size="lg"
                  onChange = {(e) => setNumber(e.target.value)}
              />
          </Form.Group>

                       
          <Form.Group>
              <Form.Label>Date du match:</Form.Label>
              <DatePicker 
                      locale = "fr"
                      key = "datepicker"
                      className="form-control form-control-lg dpicker"  
                      selected={matchDate}
                      filterDate={isValidDate}
                      id="date-form" placeholderText="yyyy/mm/dd"  dateFormat="yyyy/MM/dd" 
                      name="date-form" required 
                      onChange = {(date) => setMatchDate(date)}
                                    />
          </Form.Group><br/>

          <Form.Group>
              <Form.Label>Description:</Form.Label>
              {/* <Form.Label>{email}</Form.Label> */}
              <Form.Control
                  required
                  placeholder="Décrivez votre match"
                  as="textarea"
                  value = {body}
                  size="lg"
                  onChange={(e) => setBody(e.target.value)}
              />
          </Form.Group><br/>
                        
          <div className="btnForm">
              <Button variant="secondary" className="btnBack"  onClick={()=>history.push("/searchplayers")}>
                  Retour
              </Button>
              {!isPending && <Button variant="success" className="btnRegister" type="submit" >
                  Ajouter le post
              </Button>}
              {isPending && <Button variant="success" className="btnRegister" type="submit" >
                  Ajout en cours ...
              </Button>}
          </div>
          <br></br>
        </Form>

      </div>
    </div>
    
     );
}
 
export default Create;