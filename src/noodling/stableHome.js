import React from 'react';
import Typist from 'react-typist';
import { Link } from 'react-router-dom'; 
import { Wavy } from '../components/Wavy';

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
                <Link to="/dashboard"><button className="button_two"> Who? </button></Link>
            </div>
        </div>
        <Wavy />
    </div>
);