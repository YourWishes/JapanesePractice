import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

import TestPage from './../Test/TestPage';
import Japanese from './../../Data/Japanese';

const KatakanaKanaStyles = require('./KatakanaRomajiPage.scss');

class KatakanaRomajiPage extends TestPage {
    constructor(props) {
        super("/katakana/romaji", Japanese.getKatakanaRomajiTest(), props);
    }
	
	componentDidMount() {
        this.props.app.setState({
            backURL: "/katakana",
            title: "Katakana Romaji Practice"
        });
	}
	
	componentWillUnmount() {
	}
}

export default KatakanaRomajiPage;
