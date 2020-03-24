import React, { Component } from 'react';
import PhoneItem from './PhoneItem/PhoneItem';
import './PhoneList.css'
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

const URL = 'http://localhost:3300/phones';
const SERVER_ERROR_STRING = 'There was an error on the server side, check the console for more details';

export default class PhoneList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneList: [],
            phone: {},
            name: '',
            redirect: false,
            error: false,
            errorText: '',
            loading: false,
        };
    }

    componentDidMount() {

        // Load phones
        this.loadPhones();
    }

    loadPhones() {

        // GET 
        Axios.get(URL)
            .then(res => this.setState({ phoneList: res.data }))
            .catch(err => {
                this.setState({ error: true, errorText: SERVER_ERROR_STRING });
                console.log(err);
            });

        // Hide loading
        this.setState({ loading: false });

    }
    handleClick(phone) {
        this.setState({ phone, redirect: true });
    }

    render() {
        let { phoneList, redirect, phone, error, errorText } = this.state;
        return (
            <div id='PhoneList'>
                <div className='title'>Phone List</div>
                <div className='list'>

                    {/*  LIST SECTION */}
                    {
                        phoneList.length > 0 ? phoneList.map((p, i) => {
                            return (<PhoneItem key={i} phone={p} onClick={() => this.handleClick(p)}/>)
                        }): <div className='notFound'>There were no devices found :( <a href='/' onClick={this.handleReload}>try reloading the page</a></div>
                    }
                </div>

                {/*  ERROR SECTION */}
                { error && <div className='error'>{errorText}</div> }
                
                {/*  REDIRECT */}
                { redirect && <Redirect to={{
                    pathname: '/detail',
                    state: { phone }
                }}/>}
            </div>
        )
    }
}
