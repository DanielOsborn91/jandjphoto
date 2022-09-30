import React, {Component} from 'react';
import Gallery from 'react-photo-gallery';
import {engagementPhotos} from '../shared/engagement.js';


class Engagement extends Component {
    render() {
        return(
            <div>
                <Gallery photos={engagementPhotos}></Gallery>
            </div>
        );
    }
}

export default Engagement;