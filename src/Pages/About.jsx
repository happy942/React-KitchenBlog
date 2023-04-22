import React from 'react'
import Nav from './Nav';
import './CSS/style.css'

function About() {
  return (
    <>
        <Nav />
        <div className='container mt-5'>
           <div className='row'>
              <div className='col-md-6'>
              <img src="img/10.jpg" class="d-block w-100" alt="..."/>
              </div>
              <div className='col-md-6'>
                 <h3 className='ShortTitle'>Kitchen bench space: What is it and why is it so important?</h3>
                 <p className='description mt-5'>Kitchen bench space… we’d all like more of it! But what do you do if a kitchen extension is out of the question? What do you do if you have a really small kitchen? Well, the answer is simple enough – You just need to make the most of the kitchen bench space that you do have. Read on if you want to learn about some ingenious ways to create extra kitchen bench space and our top tips for kitchen bench space ideas.The answer is simple enough – You just need to make the most of the kitchen bench space that you do have. 
                 </p>
            </div>
           </div>
           <div className='row mt-5 p-5'>
              <div className='col-md-6'>
              <h3 className='ShortTitle'>Why not get a kitchen island?</h3>
                 <p className='description mt-5'>If you are lucky enough to have plenty of kitchen floor space but the problem of not having enough kitchen bench space, a kitchen island could be the ideal solution. These days, kitchen islands come in all shapes and sizes. They have the added advantage of adding considerable extra bench space to your kitchen, as well as providing you with valuable extra storage. What’s not to like?
                 If you add a few bar stools to your kitchen island, and you have instantly created an extra dining area – or a space for the kids to do their homework. A kitchen island is really what you make it and what you want it to be.

                 Contemporary kitchen design trends have transformed the humble kitchen island into something else altogether. They can now be the focal point and genuine centrepiece of the kitchen. Not only that, they can also house sinks, drawers and all sorts of ingenious storage solutions.
                 </p>
              </div>
              <div className='col-md-6'>
              <img src="img/11.jpg" class="d-block w-100" alt="..."/>
            </div>
           </div>
        </div>
    </>
  )
}

export default About