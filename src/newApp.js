import React, { Component } from 'react';
import './laptop.css';
import Form from './form';


// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes

//import slugify from 'slugify';


// This object will allow us to
// easily convert numbers into US dollar values

//const USCurrencyFormat = new Intl.NumberFormat('en-US', {
//  style: 'currency',
//  currency: 'USD'
//});

class App extends Component{
  render(){

    const FEATURES = {
      Processor: [
        {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        {
          name: 'Professor X AMD Fire Breather with sidewinder technology',
          cost: 1200
        }
      ],
      "Operating System": [
        {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        {
          name: 'Bodhi Linux',
          cost: 300
        }
      ],
      "Video Card": [
        {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        {
          name: 'Mind mild breeze 2000',
          cost: 1345
        }
      ],
      Display: [
        {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        },
        {
          name: '15.3" HGTV (3840 x 2160) Home makeover edition',
          cost: 1400
        },
      ]
    };

    return(
        <div className="App">
            <header>
            <h1>ELF Computing | Laptops</h1>
            </header>
                <Form features={FEATURES}/>
        </div>
    )
  }
}

export default App