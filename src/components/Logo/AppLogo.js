import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

const LogoStyles = require('./AppLogo.scss');

class AppLogo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
			<div className="app-logo kana-option">
				<Link to="/">
                    <span className="kana">日本語</span>
                    <span className="eng">Practice Japanese</span>
				</Link>
			</div>
        )
    }
}

export default AppLogo;
