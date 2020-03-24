import React, { Component } from 'react';
import './PhoneItem.css';

// Store images path as a const for ease of use
const ASSETS = './images/';
const CURRENCY = '€'

export default class PhoneItem extends Component {
    state = {
        phone: this.props.phone,
    }
    
    render() {
        let { phone } = this.state;
        let src = `${ASSETS}${phone.imageFileName}`
        return (
            <div className='phoneItem' onClick={this.props.onClick}>
                <img src={src} />
                <span className='name'>{phone.name}</span>
                <span className='manufacturer'>{phone.manufacturer}</span>                
                <span className='price'>{phone.price}{CURRENCY}</span>
            </div>
        )
    }
}
