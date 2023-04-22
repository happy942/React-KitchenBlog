import React from 'react'
import Nav from './Nav'
function Food() {
  return (
    <>
        <Nav />
        <div className='container mt-5'>
          <div className='row'>
             <div className='col-md-6'>
             <img src="img/12.jpg" class="d-block w-100" alt="..."/>
             </div>
             <div className='col-md-6'>
             <h3 className='ShortTitle'>Four Ways to Dress up Your Hot Dog for an Over-the-Top Fourth</h3>
             <p className='description mt-5'>
             Nothing says summer like a hot dog. Whether you’re grilling dogs outside, or boiling them up in the kitchen, a loaded hot dog is the perfect way to kick off any celebration. While a simple preparation is delicious, the right toppings can transform a hot dog from a nostalgic childhood favorite into a full-blown gourmet meal. Try these preparations to add a little something special. All of our dressed up dogs start with all-beef frankfurters—these sausages are the traditional base for many styles, but feel free to improvise with your favorite brand.One of the many variations on the basic hot dog, a cheese dog is a kind of hot dog that includes cheese, usually Cheddar or processed American cheese, that is either melted onto a hot dog, processed into a hot dog, or placed between two halves of a wiener sausage. Other possible cheese options include cream cheese, Swiss cheese, and even Raclette cheese, while other ingredients vary locally and depending on preference. Hot dog buns, which can be either steamed, toasted, or grilled, can be replaced with toast or regular white bread.
             </p>
             </div>
          </div>
          <div className='row mt-5 p-5'>
            <div className='col-md-6'>
                <h3 className='ShrtTitle'>Outside-In Juicy Lucy Cheesy Burger</h3>
               <p className='description mt-5'>
               So, I designed this monster of a burger, as not only a gift to us burger lovers who actually enjoy devouring every morsel of our burgers, but also as an enormous thank-you to several of the sponsors who were super cool and grateful to us bloggers who got together again this year for #BurgerMonth!

               Blogs take SO much more time, effort, and money than most people realize. There’s the full development of an original recipe, gasoline and time running back and forth to the store, grocery money (hopefully) well spent, time and utilities cooking, washing the dishes and entire kitchen (or grill) cleanup afterwards using even more hot water, gas, electricity, and soap, photoing the recipe (which usually takes several days!), editing the photos, putting them onto our blogs (most of which aren’t even free), writing out and adding photos to an entire blog post (usually including links which takes a LOT of extra time searching the internet to find, copy, and paste for ease for our users), editing the blog, putting the recipe onto our blogs, and doing all of this without barely a thank-you ever.
               </p>
            </div>
            <div className='col-md-6'>
                <img src="img/13.jpg" class="d-block w-100" alt="" />
            </div>
          </div>
        </div>
        </>
  )
}

export default Food