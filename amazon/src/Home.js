import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
 return (
  <div className='home'>
   <div className='home__container'>
    <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='' />

    <div className='home__row'>
     <Product 
     id='1'
     title="Women's t-shirt" 
     price={25.00}
     image='https://uploads.twitchalerts.com/000/106/383/893/1132994-mockup-15999578385897-0.png'
     rating={5}
     />
     <Product 
     id='2'
     title='Enigma Drawstring Bag'
     price={25.00}
     rating={5}
     image='https://uploads.twitchalerts.com/000/106/383/893/1132994-mockup-15962432628894-0.png'/>
    </div>

    <div className='home__row'>
     <Product 
     id='3'
     title='Stream Mug'
     price={20.00}
     rating={5}
     image='https://uploads.twitchalerts.com/000/106/383/893/1132994-mockup-15977903414830-0.png'/>
     <Product
     id='4'
     title='Team Hoodie'
     price={30.00}
     rating={5}
     image='https://uploads.twitchalerts.com/000/106/383/893/1132994-mockup-15962418015534-0.png' />
     <Product
     id='5'
     title='Team Snapbacks'
     price={35.00}
     rating={5}
     image='https://uploads.twitchalerts.com/000/106/383/893/1132994-mockup-15962410294574-0.png' />
    </div>

    <div className='home__row'>
     <Product
     id='6'
     title='Mens t-shirt'
     price={20.00}
     rating={5}
     image='https://uploads.twitchalerts.com/000/106/383/893/1132994-mockup-1596241171598-0.png' />
    </div>
   </div>
  </div>
 )
}

export default Home
