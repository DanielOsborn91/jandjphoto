import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import {weddingPhotos} from '../shared/wedding.js';


class Wedding extends Component {
    render() {
        return (
            <div>
                <Gallery photos={weddingPhotos}></Gallery>
            </div>
        );
    }
}

export default Wedding;