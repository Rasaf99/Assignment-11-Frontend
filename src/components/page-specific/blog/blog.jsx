

import './style.css'

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




const question_answer_array = [

    {
        question: "What is the difference between SQL and NoSQL?",
        answer: "SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. There are five practical differences between SQL and NoSQL: 1.Language, 2.Scalability, 3.Structure, 4.Properties, 5.Support and communities"
    },

    {
        question: "What is JWT, and how does it work?",
        answer: "JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties. At first, user sign-in using username and password or google/facebook.Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key."
    },


    {
        question: "What is the difference between javascript and NodeJS?",
        answer: "JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Node.js, on the other hand, is a V8-based server-side programming language. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful."
    },

    {
      question: "How does NodeJS handle multiple requests at the same time?",
      answer: "Node took a slightly different approach to handling multiple concurrent requests at the same time if you compare it to some other popular servers like Apache. Spawning a new thread for each request is expensive. Also, threads are doing nothing when awaiting other operations’ result (i.e.: database read). That’s why Node is using one thread instead. Such an approach has numerous advantages. No overhead comes with creating new threads. Also, your code is much easier to reason about, as you don’t have to worry about what will happen if two threads access the same variable. It’s because that simply cannot happen. There are some drawbacks as well. Node isn’t the best choice for applications that mostly deal with CPU intensive computing. On the other hand, it excels at handling multiple I/O requests."
  }


]




const accordion_css = {

  
}


const icon_css = {

  
}


export default function BLOG() {
  return (

   <div className='question_answer_component'>

     <h3  style={{marginBottom:'2rem'}}>Frequently Asked questions in the Interview</h3>

      <div className='question_answer_wrapper'>

        {

          question_answer_array.map((item)=> {

            return (
                <Accordion sx={{backgroundColor:'hsl(0, 0%, 14%)', 
                color: 'hsl(0, 0%, 95%)'}}>
                  <AccordionSummary 
                    expandIcon={<ExpandMoreIcon  sx={{color: 'hsl(0, 0%, 95%)'}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography sx={{textAlign:'center'}}>{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{backgroundColor:'hsl(0, 0%, 19%)'}}>
                    <Typography sx={{textAlign:'center'}}>
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
            )

          })

        }

      
      
      </div>

    </div>
  );
}
