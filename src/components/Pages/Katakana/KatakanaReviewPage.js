import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import AppUtils from './../../../utils/AppUtils';

import ReviewPage from './../Test/ReviewPage';
import Japanese from './../../Data/Japanese';

const KatakanaReviewStyles = require('./KatakanaReviewPage.scss');

class KatakanaReviewPage extends ReviewPage {
    constructor(props) {
        super("/katakana/review", Japanese.getKatakana(), props);
    }
	
	componentDidMount() {
        this.props.app.setState({
            backURL: "/katakana",
            title: "Katakana Review"
        });
	}
}

export default KatakanaReviewPage;