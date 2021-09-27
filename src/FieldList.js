import {Card, Row, Col, Button, Modal, Form} from 'react-bootstrap';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import iconOk from './icons/ok.png'
import useData from './useData';
import { registerLocale } from  "react-datepicker";
import fr from 'date-fns/locale/fr';
registerLocale('fr', fr);
const FieldList = ({city,fieldSelect, list}) => {
   
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [bookDate, setBookDate] = useState(null);
    const [field, setField] = useState("");
    const [fieldForm, setfieldForm] = useState(false);
    const [infosForm, setInfosForm] = useState(false);
    const [showVer, setShowVer] = useState(false);
    const [dateExpiration,setDateExpiration] = useState(null)
    const {availabilities, creneaux} = useData();
    const [creneauSelected, setCreneauSelected] = useState('notSelected');

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
        if(isValid){
            isValid = availabilities.filter((slot) => (
                (field.name === slot.field) && (slot.date.getTime() === new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()))
            ).length !== 6 ;
           
        }
        
        return isValid;  
      };

    const handleClose = () => {setfieldForm(false);
                                setShowVer(false);
                                
    };
    
    const handleShowInfos = () => {
        setInfosForm(true);
    }
    const handlefieldForm = (field) => {
        setField(field);
        setfieldForm(true);
        setInfosForm(false);
    }

    
    const [validated, setValidated] = useState(false);

  const handleFieldSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
        handleShowInfos();
        event.preventDefault();
        event.stopPropagation();
        setfieldForm(false);
        
    }
    
  };

  const handleInfosSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
        setShowVer(true);
        event.preventDefault();
        event.stopPropagation();
        setInfosForm(false);
    }
    setValidated(true);
  };
    return ( 
        <div className="fields">
            

            {city === 'notSelected' && fieldSelect === 'notSelected' &&
                <Row className="row-cols-1 row-cols-md-3 g-5">
                {list && list.map((field) => (
                  <Col>
                    <Card className="h-100">
                        <Card.Img  className="fieldPicture" src={field.img} alt={field.name}/>
                      <Card.Body>
                        <Card.Title className="cardTitle">{field.name}</Card.Title>
                        <Card.Text>
                          {field.descriptionFR} <br/><br/>
                            <p title="Le tarif est pour l'ensemble des joueurs et non pour un seul joueur"><strong><label>Tarif: </label></strong>{field.prix}</p>
                            <p><strong><label>Adresse: &ensp;</label></strong>{field.adresse}</p>
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                      <Button variant="success" onClick={() => handlefieldForm(field)}>Réserver ce terrain</Button>
                      </Card.Footer>
                    </Card>
                  </Col>
                ))}
              </Row>
            }

            {city !== 'notSelected' && fieldSelect === 'notSelected' &&
                <Row className="row-cols-1 row-cols-md-3 g-5">
                {list && list.map((field) => ( field.city === city &&
                  <Col>
                    <Card className="h-100">
                        <Card.Img  className="fieldPicture" src={field.img} alt={field.name}/>
                      <Card.Body>
                        <Card.Title className="cardTitle">{field.name}</Card.Title>
                        <Card.Text>
                          {field.descriptionFR} <br/><br/>
                            <p><strong><label>Tarif: </label></strong>{field.prix}</p>
                            <p><strong><label>Adresse: &ensp;</label></strong>{field.adresse}</p>
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                      <Button variant="success" onClick={() => handlefieldForm(field)}>Réserver ce terrain</Button>
                      </Card.Footer>
                    </Card>
                  </Col>
                ))}
              </Row>
            }
            {city !== 'notSelected' && fieldSelect !== 'notSelected' &&
                <Row className="row-cols-1 row-cols-md-3 g-5">
                {list && list.map((field) => ( field.city === city && field.name === fieldSelect &&
                  <Col>
                    <Card className="h-100">
                        <Card.Img  className="fieldPicture" src={field.img} alt={field.name}/>
                      <Card.Body>
                        <Card.Title className="cardTitle">{field.name}</Card.Title>
                        <Card.Text>
                          {field.descriptionFR} <br/><br/>
                            <p><strong><label>Tarif: </label></strong>{field.prix}</p>
                            <p><strong><label>Adresse: &ensp;</label></strong>{field.adresse}</p>
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                      <Button variant="success" onClick={() => handlefieldForm(field)}>Réserver ce terrain</Button>
                      </Card.Footer>
                    </Card>
                  </Col>
                ))}
              </Row>
            }


            <Modal show={fieldForm} onHide={handleClose} size="lg" >
                <Modal.Header className="modalHeader ">
                    <Modal.Title >Réservation du terrain   (partie 1/2)</Modal.Title>
                    <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleFieldSubmit}>
                            <Form.Group>
                                <Form.Label className='booking'>Terrain sélectionné:</Form.Label>
                                <Card className="h-100">
                                    <Card.Img  className="fieldPicture" src={field.img} alt={field.name}/>
                                    <Card.Body>
                                        <Card.Title className="cardTitle">{field.name}</Card.Title>
                                        <Card.Text>
                                            {field.descriptionFR} <br/><br/>
                                            <p><strong><label>Tarif: </label></strong>{field.prix}</p>
                                            <p><strong><label>Adresse: &ensp;</label></strong>{field.adresse}</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Form.Group>
                            <br/>
                            <Form.Group>
                                <Form.Label>Sélectionner la date de la réservation:</Form.Label>
                                {/* <Form.Label>{dob}</Form.Label> */}
                                <DatePicker 
                                    locale="fr"
                                    key = "datepicker"
                                    selected={bookDate} 
                                    className="form-control form-control-lg dpicker"  
                                    filterDate={isValidDate}
                                    id="date-form" placeholderText="yyyy/mm/dd"  dateFormat="yyyy/MM/dd" 
                                    onChange={(date) => setBookDate(date) } 
                                    name="date-form" required />
                                <Form.Control.Feedback type="invalid">Veuillez entrer la date d'anniversaire du joueur</Form.Control.Feedback>
                            </Form.Group>
                            <br/>

                            <Form.Label > Sélectionner le créneau horaire du match</Form.Label>
                            <Form.Control as="select" size="lg" value={creneauSelected} onChange={(e)=> setCreneauSelected(e.target.value)}>
                                
                                {   bookDate &&                 
                                    availabilities.filter((slot) => slot.field === field.name && slot.date.getTime() === bookDate.getTime()).length !== 0
                                    ? (bookDate && availabilities.map((slot) => (slot.field === field.name && slot.date.getTime() === bookDate.getTime() &&
                                        creneaux.map((creneau) => (creneau === slot.creneau && <option value={creneau} key={creneau}>{creneau}</option>))
                                    ))): (creneaux.map((creneau) => <option value={creneau} key={creneau}>{creneau}</option>))                    
                                }
                            </Form.Control><br/>     
                        
                        <div className="btnForm">
                            <Button variant="secondary"  onClick={handleClose}>
                                Fermer
                            </Button>
                            <Button variant="success" className="btnRegister" type="submit" >
                                Suivant
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        
            <Modal show={infosForm} onHide={handleClose} size="lg" >
        
                <Modal.Header className="modalHeader">
                    <Modal.Title >Réservation du terrain   (partie 2/2)</Modal.Title>
                    <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleInfosSubmit}>
                        <Form.Group  controlId="validationCustom01">
                            <Form.Label>Nom:</Form.Label>
                            {/* <Form.Label>{nom}</Form.Label> */}
                            <Form.Control
                                required
                                type="text"
                                pattern="([A-Za-z](\s)?)+"
                                placeholder="Entrez votre nom"
                                value = {nom}
                                onChange = {(e) => setNom(e.target.value)}
                                size="lg"
                                
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
                                placeholder="Entrez votre prénom"
                                value = {prenom}
                                onChange = {(e) => setPrenom(e.target.value)}
                                size="lg"
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
                                size="lg"
                                

                            />
                            <Form.Control.Feedback type="invalid">Veuillez remplir ce champ</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Carte de crédit:</Form.Label>
                            {/* <Form.Label>{email}</Form.Label> */}
                            <Form.Control
                                required
                                type="text"
                                placeholder= "xxxx xxxx xxxx xxxx" pattern= "[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}" data-inputmask="'mask': '9999 9999 9999 9999'"
                                size="lg"
                            />
                            <Form.Control.Feedback type="invalid">Veuillez remplir ce champ</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>CCV:</Form.Label>
                            {/* <Form.Label>{email}</Form.Label> */}
                            <Form.Control
                                required
                                type="text"
                                pattern="[0-9]{3}"
                                placeholder="Entrez votre CCV"
                                size="lg"
                            />
                            <Form.Control.Feedback type="invalid">Veuillez remplir ce champ avec les 3 chiffres au dos de votre carte</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date d'expiration:</Form.Label>
                            <DatePicker 
                                    key = "datepicker"
                                    className="form-control form-control-lg dpicker"  
                                    selected={dateExpiration}
                                    id="date-form" placeholderText="yyyy/mm"  dateFormat="yyyy/MM" 
                                    name="date-form" required 
                                    onChange = {(date) => setDateExpiration(date)}
                                    />
                                    
                                <Form.Control.Feedback type="invalid">Veuillez entrer la date d'expiration de la carte</Form.Control.Feedback>
                        </Form.Group><br/>
                        
                        <div className="btnForm">
                            <Button variant="secondary" className="btnBack"  onClick={()=>handlefieldForm(field)}>
                                Retour
                            </Button>
                            <Button variant="success" className="btnRegister" type="submit" >
                                Confirmer la réservation
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
                    {bookDate && <Form.Label>Fantastique! {prenom} votre réservation a été placée avec succès. Vous pouvez vous rendre le {bookDate.toLocaleString().split(",")[0]} au terrain {field.name} afin de jouer avec vos amis entre {creneauSelected}</Form.Label>}

                    </Form>
                    
                </Modal.Body>
            </Modal>
            
        </div>
     );
}
 
export default FieldList;