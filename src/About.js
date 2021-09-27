import {Card, Row, Col} from 'react-bootstrap';
import {useTranslation } from "react-i18next";
const About = () => {
    const { t, i18n } = useTranslation();
    return ( 
        <div className="content">
            <p className = "title">{t("navbar.aboutUs")}</p>
            <p className= "programs">{t("aboutUs.ourServices")}</p>
            <div className="fields">
                <Row className="row row-cols-1 row-cols-md-2 g-5">
                    <Col>
                        <Card className="h-100">
                        <Card.Body>
                            <Card.Title className="cardTitle"><a className= "register" href="/scoretv">{t("navbar.TV")}</a></Card.Title>
                            <Card.Text className="infosText">
                            {t("aboutUs.scoreTvDetails")}

                            </Card.Text>
                        </Card.Body>
                        
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100">
                        <Card.Body>
                            <Card.Title className="cardTitle"><a className= "register" href="/academy">{t("navbar.academy")}</a></Card.Title>
                            <Card.Text className="infosText">
                            {t("aboutUs.academyDetails")}
                            
                            </Card.Text>
                        </Card.Body>
                        
                        
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100">
                        <Card.Body>
                            <Card.Title className="cardTitle"><a className= "register" href="/book"> {t("navbar.book")}</a></Card.Title>
                            <Card.Text className="infosText">
                            {t("aboutUs.bookingDetails")}
                            </Card.Text>
                        </Card.Body>
                        
                        
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100">
                        <Card.Body>
                            <Card.Title className="cardTitle" > <a className= "register" href="/searchplayers">{t("navbar.findPlayers")}</a></Card.Title>
                            <Card.Text className="infosText">
                            {t("aboutUs.findPlayersDetails")}
                            </Card.Text>
                        </Card.Body>
                     
                        </Card>
                    </Col>

                </Row>
            </div>
         
        </div>
     );
}
 
export default About;