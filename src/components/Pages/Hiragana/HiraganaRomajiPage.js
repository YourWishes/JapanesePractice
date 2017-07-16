import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

import TestPage from './../Test/TestPage';
import Japanese from './../../Data/Japanese';

const HiraganaKanaStyles = require('./HiraganaRomajiPage.scss');

class HiraganaRomajiPage extends TestPage {
    constructor(props) {
        super("/hiragana/romaji", Japanese.getHiraganaRomajiTest(), props);
    }
	
	componentDidMount() {
        this.props.app.setState({
            backURL: "/hiragana",
            title: "Hiragana Romaji Practice"
        });
	}
	
	componentWillUnmount() {
	}
}

export default HiraganaRomajiPage;
