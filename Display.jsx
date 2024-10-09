import React from 'react'
import shoe from '../../../assets/shoe_image.png'
import amazon from '../../../assets/amazon.png'
import flipkart from '../../../assets/flipkart.png'
import './Display.css'

const Display = () => {
  return (

<div className='main-display'>

    <div className='text-display'>
      
      <div className='left'>
        <h1>
            YOUR FEET DESERVE THE BEST
        </h1>
        <p>
        Rejoice! you are about to die at the hands of children of thanos, <br/>Be thankful you meaningless lives are now coming to and end.
        </p>

        <div className='buy-now'>
        <h5>shop now</h5> <h5>Add to cart</h5>
        </div>
      </div>

      <p>Also available on </p>
      <div className='social-media'>
       
        <img src={amazon}/>
        <img src={flipkart}/>
      </div>

    </div>

    <div className='shoe-display'>
        <img src={shoe} />
    </div>

</div>
  )
}

export default Display;
