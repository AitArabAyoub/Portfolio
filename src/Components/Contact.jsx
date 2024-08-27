import React, { useContext } from 'react'
import contactAnimation from "../../public/contact.json"
import Lottie from 'lottie-react'
import { useForm, ValidationError } from '@formspree/react';
import { ThemeContext } from '../App';

function Contact() {
    const [state, handleSubmit] = useForm("mldreqzb");
    const {theme} = useContext(ThemeContext)
    return (
        <div className='container px-5' id='contact'>
            <h2 class={"text-center " + (theme == "light" ? "text-dark" :  "text-white")}> Contact Us</h2>
            <p class="text-secondary text-center">Contact us for more information and get notified when i publsih something</p>
            <div className="row">
                <div className="col-12 col-lg-6"> 
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label htmlFor='email' className={"form-label " + (theme == "light" ? "text-dark" : "text-white")}>Email address</label>
                            <input type="email" class="form-control border border-3" id="email" placeholder="name@example.com" name="email" required></input>
                            <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <div class="mb-3">
                            <label htmlFor='message' className={"form-label " + (theme == "light" ? "text-dark" : "text-white")}>Your Message</label>
                            <textarea class="form-control border border-3" id="message" name="message" required></textarea>
                            <ValidationError 
                                prefix="Message" 
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        <input className={"btn " + (theme == "light" ? "btn-outline-dark" : "btn-outline-light")} type="submit" value="Submit" disabled={state.submitting}></input>
                        {state.succeeded && <p className='text-success mt-2'><i class="bi bi-check2-circle"></i> Your Message is Sended Successfully</p>}
                    </form>
                </div>
                <div className="d-none d-lg-block col-6">
                    <Lottie animationData={contactAnimation} style={{height : "300px"}}/>
                </div>
            </div>
        </div>
    )
}

export default Contact
