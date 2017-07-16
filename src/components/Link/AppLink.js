import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import AppUtils from './../../utils/AppUtils';

class AppLink extends Component {
    //Required Props:
    //to = The href to navigate to
    //Optional Props:
    //tappedClass = Class to add when the link is tapped (Defaults to .tapped)
    //tappedTimeout = Timeout to do when link is tapped (Defaults to 70ms)
    
    constructor(props) {
        super(props);
    }
	
	componentDidMount() {
	}
	
	componentWillUnmount() {
        if(this.tapTask) {
            clearInterval(this.tapTask);
            this.tapTask = null;
        }
	}
    
    linkClick(e) {e.preventDefault();}
    
    doNavigate() {
        const { history } = this.context.router;
        const { replace, to } = this.props;
        
        if (replace) {
            history.replace(to);
        } else {
            history.push(to);
        }
        this.tapTask = null;
        this.refs.anchor.removeClass(this.props.tappedClass ? this.props.tappedClass : "tapped");
    }
    
    handleTouchTap(e) {
        if(this.tapTask) return;
        
        if(this.props.onTap) this.props.onTap();
        this.tapTask = setTimeout(this.doNavigate.bind(this), this.props.tappedTimeout ? this.props.tappedTimeout : 70);
        this.refs.anchor.addClass(this.props.tappedClass ? this.props.tappedClass : "tapped");
        AppUtils.tapVibrate();
    }

    render() {
        const { to } = this.props;
        const href = this.context.router.history.createHref(
            typeof to === 'string' ? { pathname: to } : to
        );
        
        return (
            <a {...this.props} href={href} ref="anchor" onClick={this.linkClick} onTouchTap={this.handleTouchTap.bind(this)}>
                {this.props.children}
            </a>
        );
    }
}

AppLink.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default AppLink;
