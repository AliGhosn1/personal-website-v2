import { useState, useEffect, useRef } from "react";
import emailjs from 'emailjs-com';

import Check from '../../assets/check.mp3';

import { FormWrapper, FormBodyItemLeft, FormTitle, FormContactInfo, FormBodyItem, FormGroup, FormControl, FormMessage, FormButton } from "./contact-form.styles";

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);
  
    return [playing, toggle];
};

const ContactForm = () => {
    const [playing, toggle] = useAudio(Check);

    const form = useRef();

    const defaultFormFields = {
        name: "",
        email: "",
        message: ""
    }

    const[formFields, setFormFields] = useState(defaultFormFields);
    const{ name, email, message } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_df87cnf', 'template_kpwyjqe', form.current, 'oiJto1aZJ4v5J0bwe');
        toggle();
        setFormFields(defaultFormFields);
    }

    return(
        <FormWrapper ref={form} onSubmit={submitHandler}>
                <FormBodyItemLeft>
                <FormTitle>
                    <span>CONTACT</span>
                    <span>ME</span>
                </FormTitle>
                <FormContactInfo>ghosn2@uwindsor.ca</FormContactInfo>
                </FormBodyItemLeft>
                <FormBodyItem>
                    <div>
                        <FormGroup>
                            <FormControl placeholder="NAME" value={name} name='name' onChange={handleChange} autoComplete="off" onrequired/>
                        </FormGroup>
                        <FormGroup>
                            <FormControl placeholder="EMAIL" value={email} name='email' onChange={handleChange} type="email" autoComplete="off" required/>
                        </FormGroup>
                        <FormGroup>
                            <FormMessage placeholder="MESSAGE" value={message} name='message' onChange={handleChange} autoComplete="off" required/>
                        </FormGroup>
                        <FormGroup>
                            <FormButton type="submit">Submit</FormButton>
                        </FormGroup>
                    </div>
                </FormBodyItem>
        </FormWrapper>
    )
}

export default ContactForm;