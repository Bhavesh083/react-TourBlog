import React from 'react';
import './Cards.css';
import Cardslist from './Cardslist';

function Cards() {
    return (
        <div className='heads'>
            <h2>Watchout amazing spots!</h2>
          <div className='container'> 
              <ul className='ul-card'>
                <Cardslist 
                  src=' https://1.bp.blogspot.com/-cnBeX3f51fY/UbNx0HsPT8I/AAAAAAAAImc/CdCAnfPoJrM/s1600/the-mountain.jpg'
                  path='/Sceneries'
                  label = 'Dark Glory'
                  text='Beauty woods and cliptary trees of dark town' />
              </ul>
              <ul className='ul-card'>
                <Cardslist 
                  src='https://th.bing.com/th/id/R1118546358747e6bd506c811fb69d04f?rik=1ri61xN9g7Xk5A&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f220773-nature-landscape-dark-mountain-sun_rays-summer-clouds.jpg&ehk=PbWH60sBCWps%2bvwsRgZ2vWE%2fcaplfc09sfTNKQZVy4g%3d&risl=&pid=ImgRaw'
                  path='/Sceneries'
                  label = 'Heaven'
                  text='Wonderland Heaven!' />
              </ul>
              <ul>
                <Cardslist 
                  src='https://th.bing.com/th/id/R153f5599ace2897a8aa6bd077a19e6b5?rik=p0HJNFkdl0sPWQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-5psT2Xx9-_Q%2fUbNxN7o2NaI%2fAAAAAAAAIl0%2fMGr39xaeJUw%2fs1600%2fmaxresdefault%2bdark%2bnature.jpg&ehk=t5ooqLLRLnM%2b5fGV%2bIKX9uATo%2balrEwaoe2sajKFO3c%3d&risl=&pid=ImgRaw'
                  path='/Sceneries'
                  label = 'Dark Nature'
                  text='Secret Path' />
              </ul>
              <ul>
                <Cardslist 
                  src='https://th.bing.com/th/id/OIP.SOYnLWhNg03PqkXrzR8ovwHaEo?pid=Api&rs=1'
                  path='/Sceneries'
                  label = 'Dark Clouds'
                  text='Beauty of dark clouds and hills' />
              </ul>
              <ul>
                <Cardslist 
                  src='https://th.bing.com/th/id/OIP.hy6Vk3yRzFpKmTbsi5yLGAHaE8?pid=Api&rs=1'
                  path='/Sceneries'
                  label = 'Park'
                  text='Beauty of dark town woods and cliptary trees' />
              </ul>
              <ul>
                <Cardslist 
                  src='https://th.bing.com/th/id/OIP.F3Qdd0MTTHZUVH6F2Jh7jwHaE8?pid=Api&rs=1'
                  path='/Sceneries'
                  label = 'Peace Nature'
                  text='Nature with peace of mind , birds chirping!' />
              </ul>
          </div>
         </div> 
    ) 
}

export default Cards;