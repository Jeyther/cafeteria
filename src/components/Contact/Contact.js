import React from 'react';


const Contact = () => {
    return (

        <div className='contact'>

            <h3 className='contact__title'>Contact</h3>

            <div className='contact__img'></div>

            <form className='contact__form'>
                <div>
                    <label htmlFor='name' className='contact__form__label'>Name</label>
                    <input type='text' id='name' placeholder='Enter your name' className='contact__form__input'/>
                </div>
                <div>
                    <label htmlFor='email' className='contact__form__label'>Email</label>
                    <input type='email' id='email' placeholder='Enter your email' className='contact__form__input'/>
                </div>
                <div>
                    <label htmlFor='message' className='contact__form__label'>Message</label>
                    <textarea id='message' placeholder='Enter your message' className='contact__form__input'></textarea>
                </div>
                <div>
                    <button type='submit' className='contact__form__button'>Send</button>
                </div>
            </form>


        </div>

    );
}

export default Contact;