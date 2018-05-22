import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Typist from 'react-typist';
import { Link } from 'react-router-dom'; 

export const HomePage = () => (
    <div>
        <div className="home">
            <div className="home__content">
                <h1 className="home__title">   
                    <Typist>
                        <Typist.Delay ms={2000} />
                            <span>Hey! </span>
                        <Typist.Delay ms={2500} />
                            <span>My name is Taylor.</span>
                        <Typist.Backspace count={24} delay={1000} />
                        <Typist.Delay ms={500} />
                            <span>Welcome to my Portfolio!</span> 
                    </Typist>
                </h1>
                <Link to="/dashboard"><button className="button_two fade--button__main"> Who? </button></Link>
            </div>
        </div>
        <div className="wave-container">
            <div className="wave--one"></div>
            <div className="wave--two"></div>
            <div className="wave--three"></div>
            <div className="wave--four"></div>
            <div className="wave--five"></div>
            <div className="wave--six"></div>
            <div className="wave--seven"></div>
        </div>
    </div>
);