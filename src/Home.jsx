import React from 'react'
import Nav from './Pages/Nav'
import Carousal from './Pages/Carousal';
import Card from './Pages/Card';
function Home() {
  return (
    <>
       <Nav/>
    <div className='container'>
     <Carousal/>
    <div className='row'>
      <div className='col-md-4'>
      <Card img="img/4.jpg" title="Yummy Hot Dog" p="While hot dogs are delicious, they aren't the healthiest pick around. Hot dogs are a type of processed meat, a category of foods that are known carcinogens, according to the American Cancer Society." link="" btn="Learn More"/>
      </div>
      <div className='col-md-4'>
      <Card img="img/5.jpg" title="Burger King" p="Who doesn't love a good juicy burger? It is one of the most loved fast-food meals as you can get everything you want in just one bite! From accompaniments like lettuce, tomatoes, onions." link="" btn="Learn More"/>
      </div>
      <div className='col-md-4'>
      <Card img="img/6.jpg" title="Best Egg Roll- Make your Breakfast Easier" p="Contrary to popular belief, egg rolls don't contain any eggs. So where does the name come from? which consists of ingredients (such as ham, sprouts, and mushrooms) wrapped in a thin omelet." link="" btn="Learn More"/>
      </div>
    </div>
    
    <div className='row'>
      <div className='col-md-4'>
      <Card img="img/7.jpg" title="Sandwitch - make it yourself" p="The sandwich is long sessions of cribbage and other card games at public gambling houses, would order his valet to bring him salt beef between two pieces of toasted bread." link="" btn="Learn More"/>
      </div>
      <div className='col-md-4'>
      <Card img="img/8.jpg" title="Easy Made Pata" p="Who doesn't love a good juicy pasta? It is one of the most loved fast-food meals as you can get everything you want in just one bite! From accompaniments like lettuce, tomatoes, onions." link="" btn="Learn More"/>
      </div>
      <div className='col-md-4'>
      <Card img="img/9.jpg" title="The Easiest Pizza You'll Ever Make" p="Margherita pizza is a thin-crust Naples-style pizza topped with tomato sauce, fresh mozzarella, basil leaves. It’s easy to make at home, and you don’t need a fancy oven or stone to get pizzeria." link="" btn="Learn More"/>
      </div>
    </div>
    </div>
    </>
  )
}

export default Home