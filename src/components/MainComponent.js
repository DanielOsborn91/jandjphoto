import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Engagement from './EngagementComponent';
import Wedding from './WeddingComponent';
import Boudoir from './BoudoirComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';


class Main extends Component {
    render() {
        return (
            <div>
                <Header />



                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/engagement' component={Engagement} />
                    <Route path='/wedding' component={Wedding} />
                    <Route path='/boudoir' component={Boudoir} />
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>


                <Footer />
            </div >
        );
    }
}

export default (Main);