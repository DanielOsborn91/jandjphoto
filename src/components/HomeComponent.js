import React, { Component } from 'react';
import {Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImgOverlay
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { boudoirPhotos } from '../shared/boudoir.js';
import {engagementPhotos} from '../shared/engagement.js';
import {weddingPhotos} from '../shared/wedding.js';
 
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boudoirPhotos: boudoirPhotos,
            engagementPhotos: engagementPhotos,
            weddingPhotos: weddingPhotos
        }
    }

    render() {
        
        return (
            <div className='container'>
                <h1>J and J Photography</h1>
                <div className='center'>
                    <img src='/assets/images/carnation.jpg' height='100px' width='100px' ></img>
                </div>
                <h5>“Only photography has been able to divide human life into a series of moments, each of them has the value of a complete existence.” -Eadweard Muybridge</h5>

                <p>
                    I'm baby pitchfork swag selvage meggings wayfarers affogato locavore butcher iPhone ennui mumblecore gluten-free pabst. 8-bit photo booth sartorial XOXO. Blue bottle occupy post-ironic chicharrones drinking vinegar enamel pin, health goth semiotics cold-pressed asymmetrical church-key scenester fam meh. Pork belly selvage blog gluten-free, cornhole shabby chic jean shorts. Vinyl pop-up DIY shoreditch, intelligentsia brunch kale chips pinterest post-ironic. Plaid raw denim craft beer, jianbing hoodie microdosing la croix intelligentsia shabby chic. Hexagon tofu venmo, lomo williamsburg flexitarian cronut man braid la croix.

                    Dummy text? More like dummy thicc text, amirite?
                </p>

                <Row>
                    <Col sm='4'>
                        <Card>
                            <CardImg top width="100%" height='250px' src="/assets/images/engagement1.jpeg" />
                            <CardBody>
                                <CardTitle>Engagement</CardTitle>
                                <CardText>Choosing who you will spend the rest of your life with is one of the single greatest moments in anyone's life. Let us capture these memories for you of the day that they said yes!</CardText>
                                <Link to='/engagement'><Button>Gallery</Button></Link>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm='4'>
                        <Card>
                            <CardImg top width="100%" height='250px' src="/assets/images/wedding1.jpg" />
                            <CardBody>
                                <CardTitle>Wedding</CardTitle>
                                <CardText>Let us capture the beginning of the rest of your lives; the moment you both announced to the world that you would love and honor and cherish each other for as long as your both shall live!</CardText>
                                <Link to='/wedding'><Button>Gallery</Button></Link>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm='4'>
                        <Card>
                            <CardImg top width="100%" height='250px'  src="/assets/images/boudoir2.jpg" />
                            <CardBody>
                                <CardTitle>Boudoir</CardTitle>
                                <CardText>Everyone is unique beautiful in their own way. Sometimes, it's hard to see that in ourselves. Let us capture that beauty for you, be it for yourself or for a special someone!</CardText>
                                <Link to='/boudoir'><Button>Gallery</Button></Link>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;