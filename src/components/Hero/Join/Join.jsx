import React, {useRef} from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join  =()=> {
    const form=useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ggdi946', 'template_7wngwms', form.current,'8K2XxQRLhxghMMFNX')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
        return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <sapn className='stroke-text'>READY TO</sapn>
                    <sapn>LEVEL UP</sapn>
                </div>
                <div>
                    <sapn>YOUR BODY</sapn>
                    <sapn className='stroke-text'>WITH US</sapn>
                    {/* 1:33 minute */}
                </div>
            </div>
            <div className="right-j">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email" name='user_email' placeholder='Enter tour email address' />
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div>
        </div>            
        );
}

export default Join;