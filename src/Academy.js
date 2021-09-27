import { useState } from 'react';
import { Card,Button,Modal, Form} from 'react-bootstrap';
import iconOk from './icons/ok.png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
const Academy = () => {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [sex, setSex] = useState("");
    const [isMale, setIsMale] = useState("");
    const [isFemale, setIsFemale] = useState("");
    const [isNonBinary, setIsNonBinary] = useState("");
    const [programSelected, setProgramSelected] = useState("");
    const [trainingCenter, setTrainingCenter] = useState("Ottawa (uOttawa Minto Stadium)");
    const [showForm, setshowForm] = useState(false);
    const [showConfForm, setshowConf] = useState(false);
    const [showVer, setShowVer] = useState(false);
    const [oneDay, setOneDay] = useState("");

    const handleClose = () => {setshowForm(false);
                                setShowVer(false);
                                window.location.reload();
    };
    const handleShowConfModal = () => {
        setshowConf(true);
    }
    const handleshowForm = (id) => {
        if(id === "oneDay"){
            setOneDay(true);  
        }else{
            setOneDay(false); 
        }
        setshowForm(true)
        setshowConf(false);}

    
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
        handleShowConfModal();
        event.preventDefault();
        event.stopPropagation();
        setshowForm(false);
    }
    setValidated(true);
  };

  const handleConfirm = (event) => {
        setshowForm(false);
        setshowConf(false);
        setShowVer(true);
        event.preventDefault();
        
  };

  useEffect(() =>{
    if(sex === "Masculin"){
        setIsNonBinary(false);
        setIsFemale(false);
        setIsMale(true);
    }else if ( sex === "Feminin"){
        setIsNonBinary(false);
        setIsFemale(true);
        setIsMale(false);
    }else{
        setIsNonBinary(true);
        setIsFemale(false);
        setIsMale(false);
    }
  },[sex])
    return ( 
        
        <div className="academy">
            
            <p className = "title">SCORE ACADEMIE<br/><label className = "subTitle">Inscrivez vous à nos cours afin de devenir le meilleur!</label></p>
            <label className="programs"> Nos programmes</label>
            <div className="row  row-cols-md-2 g-2">
              <div className="col">
                <Card className="academyCard">
                    
                    <Card.Body>
                      <Card.Title className = "cardTitle">Programme d'une séance par semaine</Card.Title>
                      <Card.Text>
                        Les joueurs seront encadrés par nos entraineurs diplomés d'Etat<br/><br/>
                        <strong>Horaires: </strong> Les séances se dérouleront les mercredis de 13h-16h ou samedis  de 9h à 12h<br/><br/>
                        <strong>Tarif: </strong> 100$/mois
                      </Card.Text> 
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="success" id='oneDay'onClick={() => handleshowForm('oneDay')}>S'inscrire au programe</Button>
                    </Card.Footer>
                </Card>
              </div>
              <div className="col">
              <Card className="academyCard">
                  
                  <Card.Body>
                    <Card.Title className = "cardTitle">Programme de deux séances par semaine</Card.Title>
                    <Card.Text>
                        Les joueurs seront encadrés par nos entraineurs diplomés d'Etat<br/><br/>
                        <strong>Horaires: </strong> Les séances se dérouleront les mercredis de 13h-16h et samedis  de 9h à 12h<br/><br/>
                        <strong>Tarif: </strong> 150$/mois
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="success" id='twoDays'onClick={() => handleshowForm('twoDays')}>S'inscrire au programe</Button>
                    </Card.Footer>
              </Card>
              </div>
          </div>


          
          <Modal show={showForm} onHide={handleClose} >
                <Modal.Header className="modalHeader">
                    <Modal.Title >Inscription à un programme </Modal.Title>
                    <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group  controlId="validationCustom01">
                            <Form.Label>Nom:</Form.Label>
                            {/* <Form.Label>{nom}</Form.Label> */}
                            <Form.Control
                                required
                                type="text"
                                pattern="([A-Za-z](\s)?)+"
                                placeholder="Entrez le nom du joueur ou de la joueuse"
                                value = {nom}
                                onChange = {(e) => setNom(e.target.value)}
                                
                            />
                            <Form.Control.Feedback type="invalid">Veuillez remplir ce champ avec uniquement des lettres</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Prénom:</Form.Label>
                            {/* <Form.Label>{prenom}</Form.Label> */}
                            <Form.Control
                                required
                                type="text"
                                pattern="([A-Za-z](\s)?)+"
                                placeholder="Entrez le prénom du joueur ou de la joueuse"
                                value = {prenom}
                                onChange = {(e) => setPrenom(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">Veuillez remplir ce champ avec uniquement des lettres</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email:</Form.Label>
                            {/* <Form.Label>{email}</Form.Label> */}
                            <Form.Control
                                required
                                type="email"
                                placeholder="Entrez votre adresse email"
                                value = {email}
                                onChange = {(e) => setEmail(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">Veuillez remplir ce champ</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date de naissance:</Form.Label>
                            {/* <Form.Label>{dob}</Form.Label> */}
                            <DatePicker
                                required
                                className="form-control form-control dpicker"
                                selected = {dob}
                                placeholderText="dd/mm/yyyy"  dateFormat="dd/MM/yyyy" 
                                onChange = {(dob) => setDob(dob)}
                                
                            />
                            <Form.Control.Feedback type="invalid">Veuillez entrer la date d'anniversaire du joueur</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Sexe identifié:</Form.Label><br/>
                            {/* <Form.Label>{sex}</Form.Label> */}
                            <Form.Check
                                inline
                                value="Masculin"
                                checked = {isMale}
                                label="Masculin"
                                name="group1"
                                type="radio"
                                onChange = {() => setSex("Masculin")}
                                id={`inline-radio-1`}
                                required
                            />
                            <Form.Check
                                inline
                                checked = {isFemale}
                                value="Feminin"
                                label="Feminin"
                                name="group1"
                                type="radio"
                                onChange = {() => setSex("Feminin")}
                                id={`inline-radio-2`}
                            />
                            <Form.Check
                                inline
                                checked = {isNonBinary}
                                value="Non-Binaire"
                                label="Non-Binaire"
                                name="group1"
                                type="radio"
                                onChange = {() => setSex("Non-Binaire")}
                                id={`inline-radio-3`}
                            />
                            <Form.Control.Feedback type="invalid" show="true">Veuillez faire une sélection svp</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Sélectionner un programme:</Form.Label>
                            {/* <Form.Label>{programSelected}</Form.Label> */}
                            <Form.Control
                                required
                                as="select"
                                placeholder=""
                                value ={programSelected}
                                onChange={(e)=> setProgramSelected(e.target.value)}
                            >
                                {oneDay && <option value="oneDay">1 jour/semaine</option>}
                                {oneDay && <option value="twoDays">2 jours/semaine</option>}
                                {!oneDay && <option value="oneDay">2 jours/semaine</option>}
                                {!oneDay && <option value="twoDays">1 jour/semaine</option>}

                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Sélectionner un centre d'entrainement:</Form.Label>
                            {/* <Form.Label>{trainingCenter}</Form.Label> */}
                            <Form.Control
                                required
                                as="select"
                                placeholder=""
                                value ={trainingCenter}
                                onChange={(e)=> setTrainingCenter(e.target.value)}
                            >
                                
                                <option value="Ottawa (uOttawa Minto Stadium)" >Ottawa (uOttawa Minto Stadium)</option>
                                <option value="Gatineau (123 rue Notre Dame)" >Gatineau (123 rue Notre Dame)</option>
                                <option value="Toronto (157 Football Square)" >Toronto (157 Football Square)</option>
                                

                            </Form.Control><br/>
                        </Form.Group>
                        <div className="btnForm">
                            <Button variant="secondary"  onClick={handleClose}>
                                Fermer
                            </Button>
                            <Button variant="success" className="btnRegister" type="submit" >
                                S'inscrire
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
          <Modal show={showConfForm}  onHide={handleClose}>
                <Modal.Header className="modalHeader">
                    <Modal.Title> Vérification des informations du joueur</Modal.Title>
                    <button type="button" className="btn-close" aria-label="Close" onClick={handleshowForm}></button>
                </Modal.Header>
                
                <Modal.Body>
                <Form noValidate onSubmit={handleConfirm}>
                        <Form.Group  controlId="validationCustom01">
                            <Form.Label>Nom:</Form.Label>
                            {/* <Form.Label>{nom}</Form.Label> */}
                            <Form.Control
                                
                                readOnly
                                type="text"
                                pattern="([A-Za-z](\s)?)+"
                                placeholder="Entrez le nom du joueur ou de la joueuse"
                                value = {nom}
                                onChange = {(e) => setNom(e.target.value)}
                                
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Prénom:</Form.Label>
                            {/* <Form.Label>{prenom}</Form.Label> */}
                            <Form.Control
                                readOnly
                                type="text"
                                pattern="([A-Za-z](\s)?)+"
                                placeholder="Entrez le prénom du joueur ou de la joueuse"
                                value = {prenom}
                                onChange = {(e) => setPrenom(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email:</Form.Label>
                            {/* <Form.Label>{email}</Form.Label> */}
                            <Form.Control
                                
                                readOnly
                                type="email"
                                placeholder="Entrez votre adresse email"
                                value = {email}
                                onChange = {(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date de naissance:</Form.Label>
                            {/* <Form.Label>{dob}</Form.Label> */}
                            <DatePicker
                                disabled
                                className="form-control form-control dpicker"
                                selected = {dob}
                                placeholderText="dd/mm/yyyy"  dateFormat="dd/MM/yyyy" 
                                onChange = {(dob) => setDob(dob)}
                                
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Sexe identifié:</Form.Label><br/>
                            {/* <Form.Label>{sex}</Form.Label> */}
                            <Form.Check
                                inline
                                disabled
                                checked = {isMale}
                                value="Masculin"
                                label="Masculin"
                                name="group1"
                                type="radio"
                                onChange = {() => setSex("Masculin")}
                                id={`inline-radio-1`}
                
                            />
                            <Form.Check
                                inline
                                readOnly
                                disabled
                                checked = {isFemale}
                                value="Feminin"
                                label="Feminin"
                                name="group1"
                                type="radio"
                                onChange = {() => setSex("Feminin")}
                                id={`inline-radio-2`}
                            />
                            <Form.Check
                                inline
                                readOnly
                                disabled
                                checked = {isNonBinary}
                                value="Non-Binaire"
                                label="Non-Binaire"
                                name="group1"
                                type="radio"
                                onChange = {() => setSex("Non-Binaire")}
                                id={`inline-radio-3`}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Sélectionner un programme:</Form.Label>
                            {/* <Form.Label>{programSelected}</Form.Label> */}
                            <Form.Control
                                required
                                disabled
                                as="select"
                                placeholder=""
                                value ={programSelected}
                                onChange={(e)=> setProgramSelected(e.target.value)}
                            >
                                {oneDay && <option value="oneDay">1 jour/semaine</option>}
                                {oneDay && <option value="twoDays">2 jours/semaine</option>}
                                {!oneDay && <option value="oneDay">2 jours/semaine</option>}
                                {!oneDay && <option value="twoDays">1 jour/semaine</option>}

                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Sélectionner un centre d'entrainement:</Form.Label>
                            <Form.Control
                                required
                                disabled
                                as="select"
                                placeholder=""
                                value ={trainingCenter}
                                onChange={(e)=> {setTrainingCenter(e.target.value)}}
                            >
                                
                                <option value={trainingCenter}>{trainingCenter}</option>
                                
                                

                            </Form.Control><br/>
                        </Form.Group>
                        <div className="btnForm">
                            <Button variant="secondary"  onClick={handleshowForm}>
                                Retour
                            </Button>
                            <Button variant="success" className="btnRegister" type="submit">
                                Confirmer l'inscription
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
          <Modal show={showVer}  onHide={handleClose}>
                <Modal.Header>
                    <img src= {iconOk} alt="img" className="iconOk" /> 
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Label>Félicitations ! Votre inscription a été enregistrée veuillez vous rendre à l'adresse</Form.Label>
                    <label className = "form-label"><strong>{trainingCenter}</strong></label>
                    
                    <Form.Label> Vous définirez les modalités de paiment avec un agent au comptoir</Form.Label>

                    </Form>
                    
                </Modal.Body>
            </Modal>
        </div>
     );
}
 
export default Academy;