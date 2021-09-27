import {Card} from 'react-bootstrap';
const Iframe = ({video}) => {
    return ( 
        <div className="video">
              
                    <Card >
                        <iframe src={video.url}   
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                        />
                    </Card>
              
            </div>
     );
}
 
export default Iframe;