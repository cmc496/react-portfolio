import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [state, handleSubmit] = useForm("xknyyydk");
    const [formState, setFormState] = useState(
        { 
            name: '',
            email: '',
            message: ''
        });
    const [errorMessage, setErrorMessage] = useState('');
    const {
        name,
        email,
        message
    } = formState;

    function pageReload() {
        window.location.reload(false);
    };

    if (state.succeeded) {
        return (
            <div>
                <p>Thank you for your inquiry!</p>
                <button onClick={pageReload}>Submit Inquiry</button>
            </div>
        );
    }

    return (
        <div>
            <p>Contact Me!</p>
            <div>
                <p>Phone: 867-5309
                <br />
                Email: caitlinmarie.clifford@gmail.com
            </p>
        </div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' defaultValue={name} />
            </div>

            <div>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' defaultValue={email} />
            </div>

            <div>
                <label htmlFor='message'>Message</label>
                <textarea rows='7' defaultValue={message} />
            </div>

            {errorMessage && (
                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
        </form>
        </div>
    );
}

export default Contact