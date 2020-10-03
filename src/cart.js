import React, { Component } from 'react'
import Sum from './sum'

class Cart extends Component {

    
    render(){

        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          });

          const summary = 
          Object.keys(this.props.selected).map((feature, idx) => 
          <Sum key={idx} feature={feature} idx={idx} selected={this.props.selected}/>)

        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost, 0
          );
          //console.log("Total: " + total);

        return(
          <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
              </div>
            </div>
        </section>
        )
    }


}

export default Cart