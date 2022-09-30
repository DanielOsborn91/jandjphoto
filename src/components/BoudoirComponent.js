import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import {boudoirPhotos} from '../shared/boudoir.js';


class Boudoir extends Component {

    render() {
        return(
        
            <div>
                <Gallery photos={boudoirPhotos}/>
            </div>
            
        );
    }
}
export default Boudoir;