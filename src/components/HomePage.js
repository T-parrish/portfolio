import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

export const HomePage = () => (
    <div>
        <div className="home">
            <div className="home__content">
                <h1 className="home__title">Hello, I'm Taylor</h1>
                <button className="button_two"> Who? </button>
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