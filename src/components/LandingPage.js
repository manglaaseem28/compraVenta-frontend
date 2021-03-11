import React, { Component } from 'react';
import {Image} from '../images/Screenshot__305_-removebg-preview.png'
import SignIn from './SignIn';
import SignUp from './SignUp';
class LandingPage extends Component {
    render() {
        return (
            <div className="container" /*style={{backgroundImage:`url('/assets/images/ezgif.com-gif-maker.jpg')`,backgroundSize:'cover'}}*/>
                <div className="row landing" style={{paddingLeft:0,marginLeft:0}}   >
                    <div className="col-sm-5" style={{justifyContent:'left', }}>
                        <div className='row' style={{justifyContent:'center' }}>
                        <img src='/assets/images/Screenshot__305_-removebg-preview.png' alt="logo" className='logo-img img-fluid'/>
                        </div>
                        
                    </div>
                    <div className='col-sm-7' style={{display: "flex", justifyContent: "center", alignItems: "center"}}><SignUp/></div>
                </div>
                <hr/>
                <div className="row" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <h1>Project Description</h1>
                </div>
                <hr/>
                
            </div>
        );
    }
}

export default LandingPage;