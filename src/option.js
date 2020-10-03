import React, { Component } from 'react'

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

class Option extends Component {
   


    render(){

        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          });

        const item = this.props.item;
        const feature = this.props.feature;
    
        const checker = `selected.${feature}.name`;

        const itemHash = slugify(JSON.stringify(item));

        return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={item.name === checker}
                onChange={() => this.props.onUpdate(feature, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
              </label>
            </div>
          )
    }

}

export default Option