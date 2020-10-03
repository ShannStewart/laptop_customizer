import React, { Component } from 'react'
import Cart from './cart'
import Feature from './features'

class Form extends Component {

    state = {
        selected: {
          Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
          'Operating System': {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
          'Video Card': {
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
          Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
        }
      };

    updateFeature = (feature, newValue) => {
        const selected = Object.assign({}, this.state.selected);
        selected[feature] = newValue;
        this.setState({
          selected
        });
      };

    render(){

      const features = Object.keys(this.props.features).map((feature, idx) =>  
      <Feature
        key={idx}
        feature={feature}
        features={this.props.features}
	      selected={this.state.selected}
 	      onUpdate={this.updateFeature}
       />);
  
     const cart = <Cart selected={this.state.selected}/>
     

        return(
            <main>
                <form className="main__form">
                    <h2>Customize your laptop</h2>
                    {features}
                </form>
                {cart}
            </main>
            
        )
    }

}

export default Form