import React, { Component } from 'react';
import './PhoneDetail.css';
import { Redirect } from 'react-router-dom';
import Icon from '@mdi/react'
import { mdiArrowLeftThick  } from '@mdi/js'

const ASSETS = './images/';
const CURRENCY = '€'

export default class PhoneDetail extends Component {
    state = {
        redirect: false,
        phone: {},
    }
    handleClose = () => {
        this.setState({ redirect: true })
    }
    render() {
        let { redirect } = this.state;
        let { phone } = this.props.location.state;
        let src = `${ASSETS}${phone.imageFileName}`
        return (
            <div id='PhoneDetail'>
                <span className='close' onClick={this.handleClose}>
                    <Icon path={mdiArrowLeftThick }
                        size={1}
                        color="white"
                    />
                </span>
                <h1 className='name'>{phone.name}</h1>
                <span className='manufacturer'></span>
                <div className='details'>
                    <img src={src} />
                    <span className='title'>Description</span>
                    <span className='description'>{phone.description}</span>
                    <span className='title'>Manufacturer</span>
                    <span className='manufacturer'>{phone.manufacturer}</span>                
                    <span className='title'>Color</span>
                    <span className='manufacturer'>{phone.color}</span>               
                    <span className='title'>Screen size</span>
                    <span className='manufacturer'>{phone.screen}</span>               
                    <span className='title'>Processor</span>
                    <span className='manufacturer'>{phone.processor}</span>               
                    <span className='title'>RAM</span>
                    <span className='manufacturer'>{phone.ram}GB</span>               
                    <span className='title'>Price</span>
                    <span className='price'>{phone.price}{CURRENCY}</span>
                </div>
                {redirect && <Redirect to='/' />}
            </div>
        )
    }
}
