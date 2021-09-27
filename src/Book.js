import { Col,Form, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import useData from './useData';
import FieldList from './FieldList';

const Book = () => {
    
    const {cities, fields} = useData();
    const [citySelected, setcitySelected] = useState('notSelected');
    const [fieldSelected, setfieldSelected] = useState('notSelected');

    /**/

      
    return ( 
        <div className="header">
            <p className = "title">RESERVEZ UN TERRAIN</p>
        
            <Form>
                <div className= "rowSelect" >
                    <Row >
                        <Col>
                            <Form.Label className="select"> Sélectionner la ville du terrain</Form.Label>
                            <Form.Control as="select" size="lg" value={citySelected} onChange={(e)=> {setcitySelected(e.target.value);
                                                                                                    setfieldSelected('notSelected') 
                                                                                                }}>
                                <option value="notSelected" key="notSelected">--Sélectionner--</option>
                                {
                                    cities.map((city) =>(
                                        <option value={city} key={city}>{city}</option>
                            
                                    ))}
                                

                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Label className="select"> Sélectionner le nom du terrain</Form.Label>
                            <Form.Control as="select" size="lg" value={fieldSelected} onChange={(e)=> {setfieldSelected(e.target.value)
                                                                                                        
                                                                                                }}>
                                <option value="notSelected" key="notSelected2">--Sélectionner--</option>
                                {
                                    fields.filter((field) => (field.city === citySelected)).map((field) =>(
                                        <option value={field.name} key={field.name}>{field.name}</option>
                                    ))}
                            </Form.Control>
                        </Col>
                    </Row> 
                </div>
            </Form><br/><br/><br/>
            <FieldList city={citySelected} fieldSelect={fieldSelected} list={fields}/>

        </div>
     );
}
 
export default Book;