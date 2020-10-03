import React, { Component } from 'react'

import Option from './option'

class Feature extends Component {
    
render(){

    const feature = this.props.feature;
    const idx = this.props.idx;

    const featureHash = feature + '-' + idx;
    const options = this.props.features[feature].map((item, i) => 
      <Option
        key={i}
        item={item}
        feature={feature}
        selected={this.props.selected}
        onUpdate={this.props.onUpdate}
      />);

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
    
}

export default Feature