import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import AppUtils from './../../../utils/AppUtils';

import ReviewPage from './../Test/ReviewPage';
import Japanese from './../../Data/Japanese';

const HiraganaReviewStyles = require('./HiraganaReviewPage.scss');

class HiraganaReviewPage extends ReviewPage {
    constructor(props) {
        super("/hiragana/review", Japanese.getHiragana(), props);
    }
	
	componentDidMount() {
        this.props.app.setState({
            backURL: "/Hiragana",
            title: "Hiragana Review"
        });
	}
}

export default HiraganaReviewPage;