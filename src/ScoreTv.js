import { Col,Form, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import { registerLocale } from  "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fr from 'date-fns/locale/fr';
import useData from './useData';
import { useEffect } from 'react';
import Iframe from './Iframe';
registerLocale('fr', fr);

const ScoreTv = () => {

    const {cities, fields, creneaux, videos } = useData();
    const [citySelected, setcitySelected] = useState('notSelected');
    const [fieldSelected, setfieldSelected] = useState('notSelected');
    const [creneauSelected, setCreneauSelected] = useState('notSelected');
    const [startDate, setStartDate] = useState(null);
    const [tmp,setTmp] =  useState(null);
    const [videoSelected, setVideoSelected] = useState(null);
    

    const isValidDate = (date) => {
        const today = new Date();
        var isValid = false;
        if(today.getFullYear() > date.getFullYear()){
            isValid = true;
        }else if (today.getFullYear() === date.getFullYear()) {
            if (today.getMonth() > date.getMonth()){
                isValid = true;
            }else if (today.getMonth() === date.getMonth()){
                if(today.getDate() >= date.getDate()){
                    isValid = true;
                }
            }
        }
        if(isValid){
            isValid = videos.filter((video) => (
                (video.field === fieldSelected) && (video.date.getTime() === new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()))
            ).length !== 0 ;
           
        }
        
        return isValid;  
      };

      useEffect(() => {
          var sub = null;
          if(startDate !== null){
            sub = videos.filter((video) => (video.field === fieldSelected && video.date.getTime() === startDate.getTime()));
            setTmp(sub);
          }
          if(tmp !== null){
            setVideoSelected( 
                tmp.filter((elem) => (elem.creneau === creneauSelected))[0]
                )
          }
          
        // eslint-disable-next-line
      },[startDate,creneauSelected]);

      

    return ( 
        <div className="header">
            <p className = "title">SCORE TV</p>
        
            <Form>
                <div className= "rowSelect" >
                    <Row >
                        <Col>
                            <Form.Label className="select"> Sélectionner la ville où le match a eu lieu</Form.Label>
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
                            <Form.Label className="select"> Sélectionner le terrain où le match a eu lieu</Form.Label>
                            <Form.Control as="select" size="lg" value={fieldSelected} onChange={(e)=> {setfieldSelected(e.target.value)
                                                                                                        setStartDate(null)
                                                                                                }}>
                                <option value="notSelected" key="notSelected2">--Sélectionner--</option>
                                {
                                    fields.filter((field) => (field.city === citySelected)).map((field) =>(
                                        <option value={field.name} key={field.name}>{field.name}</option>
                                    ))}
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Label className="select" key="select"> Sélectionner la date du match</Form.Label>
                            <DatePicker 
                            locale = "fr"
                            key = "datepicker"
                            selected={startDate} 
                            className="form-control form-control-lg dpicker"  
                            filterDate={isValidDate}
                            id="date-form" placeholderText="yyyy/mm/dd"  dateFormat="yyyy/MM/dd" 
                            onChange={(date) => setStartDate(date) } 
                            name="date-form" required />
                            
                        </Col>
                        <Col>
                            <Form.Label className="select"> Sélectionner le créneau horaire du match</Form.Label>
                            <Form.Control as="select" size="lg" value={creneauSelected} onChange={(e)=> setCreneauSelected(e.target.value)}>
                                <option value="notSelected" key = "notSelected3">--Sélectionner--</option>
                                {                           
                                    tmp && tmp.map((video) => (
                                        creneaux.map((creneau) => (creneau === video.creneau && <option value={creneau} key={creneau}>{creneau}</option>))
                                    ))                     
                                }
                            </Form.Control>                        
                        </Col>
                    </Row> 
                </div>
            </Form><br/>
            {videoSelected && <Iframe video={videoSelected} />}

        </div>
        
     );
}
 
export default ScoreTv;