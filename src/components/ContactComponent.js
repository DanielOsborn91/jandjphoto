import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'

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
    }



    handleFormSubmit = () => {
        console.log(this.state)
        this.props.submitInfo()
        var template_params = {
            "name": "name_value",
            "telephone": "telephone_value",
            "email": "email_value",
            "date": "date_value",
            "type": "type_value",
            "message": "message_value"
        }

        var service_id = "default_service";
        var template_id = "Template";
        emailjs.send(service_id, template_id, template_params);
    }

    render() {
        return (
            <div className='inner'>
                <div className='center'>
                    <img src='/assets/images/carnation.jpg' height='100px' width='100px' ></img>
                </div>
                <h1 className="p-heading1">Get in Touch!</h1>
                <p>We'd love to hear from you and be a part of your plans! <br />
                    Please complete the form below and we'll get back to you in 24 to 48 hours!
                    </p>
                <form>

                    <Button variant="primary" type="submit" onClick={this.handleFormSubmit}>
                        Submit
                        </Button>
                </form>
            </div>

        );
    }
}
export default Contact