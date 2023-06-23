"use client";
import * as React from 'react'

export default function ContactForm() {
    async function handleSubmit(event: any) {
        event.preventDefault();
        const data ={
          name: String(event.target.name.value),
          surname: String(event.target.surname.value),
          email: String(event.target.email.value),
          message: String(event.target.message.value),
    
        };
    
        const response = await fetch ('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
    
        if (response.ok) {
          console.log("Message sent successfully")
          event.target.name.value = "";
          event.target.surname.value = "";
          event.target.email.value = "";
          event.target.message.value = "";
        }
        if (!response.ok) {
          console.log("Error Sending message")
        }
        
        
        
      }
    
    return(
        
        <form onSubmit={handleSubmit}>

              <div className='w-full flex flex-col lg:w-50  leading-8 p-3'>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' className='border-2 border-cyan-600 relative bg-black  p-2 rounded-xl' />
              </div>
              <div className='w-full flex flex-col lg:w-50 leading-8 p-3'>
                <label htmlFor="surname">Surname</label>
                <input type="text" id='surname' className='border-2 border-cyan-600 relative bg-black  p-2 rounded-xl' />
              </div>
              <div className='w-full flex flex-col lg:w-50 leading-8 p-3'>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' className='border-2 border-cyan-600 relative bg-black  p-2 rounded-xl' />
              </div>
              <div className='w-full flex flex-col lg:w-50 leading-8 p-3'>
                <label htmlFor="message">Message</label>
                <textarea name="message" cols={30} rows={10} className='border-2 border-cyan-600 relative bg-black  p-10 rounded-xl'/>
              </div>
              <button type='submit' className=' flex justify-center px-4 py-2 w-24 bg-teal-400 font-burtons rounded-md lg:align-middle'>Submit</button>
            </form>
    )
}