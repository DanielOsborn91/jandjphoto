import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button } from 'reactstrap'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            telephone: '',
            email: '',
            date: '',
            type: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    handleSubmit(event) {
        event.preventDefault();


        let service_id = "default_service";
        let template_id = 'Template';
        window.emailjs.send(service_id, template_id, this.state).then(res => {
            console.log('MESSAGE SENT', res.status);
            alert("Message Sent!");
        }).catch(e => {
            console.log("There was an error", e);
        });

        this.setState({
            name: '',
            telephone: '',
            email: '',
            date: '',
            type: '',
            message: ''
        });
    }



    render() {
        return (
            <div className='inner'>
                <div className='center'>
                    <img src='/assets/images/carnation.jpg' height='100px' width='100px' alt="" ></img>
                </div>
                <h1 className="p-heading1">Get in Touch!</h1>
                <p>We'd love to hear from you and be a part of your plans! <br />
                    Please complete the form below and we'll get back to you in 24 to 48 hours!
                    </p>
                <form name='contactForm'>
                    <div class="form-group row">
                        <label className="col-md-2 col-form-label">What's your name?</label>
                        <div class="col-md-10">
                            <input className="form-control" id="name" name="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." onChange={this.handleChange} value={this.state.name}></input>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-md-2 col-form-label">Phone Number?</label>

                        <div class="col-md-10">
                            <input className="form-control" id="phone" name="telephone" type="tel" placeholder="Telephone" required="required" data-validation-required-message="Please enter your phone number." onChange={this.handleChange} value={this.state.telephone}></input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label className="col-md-2 col-form-label">Email?</label>
                        <div class="col-md-10">
                            <input className="form-control" id="email" name="email" type="email" placeholder="Email" required="required" data-validation-required-message="Please enter your email address." onChange={this.handleChange} value={this.state.email}></input>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for='date' class='col-md-2 col-form-label'>Date for your Session?</label>
                        <div class='col-md-10'>
                            <input id='date' type='date' className='form-control' name='date' required="required" data-validation-required-message="Please enter your email address." onChange={this.handleChange} value={this.state.date} />
                        </div>
                    </div>

                    <div class='form-group row'>
                        <label for='type' class='col-md-2 col-form-label'>Type of Shoot?</label>
                        <div class='col-md-10'>
                            <input className="form-control" id="type" name="type" type="text" placeholder="Engagement/Wedding/Boudoir" required="required" data-validation-required-message="Please enter your name." onChange={this.handleChange} value={this.state.type}></input>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="feedback" class="col-md-2 col-form-label">Any other Details?</label>
                        <div class="col-md-10">
                            <textarea className="form-control" id="message" name="message" placeholder='Anything else we need to know?' rows="8" onChange={this.handleChange} value={this.state.message}></textarea>
                        </div>
                    </div>

                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Submit
                        </Button>
                </form>
            </div>

        );
    }
}
export default Contact