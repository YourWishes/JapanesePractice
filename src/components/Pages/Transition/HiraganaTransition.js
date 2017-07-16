import React, { Component } from 'react';
import { render } from 'react-dom';
import { RouteTransition } from 'react-router-transition';

class HiraganaTransition extends Component {
    constructor(props) {
        super(props);
    }
	
	componentDidMount() {
	}
	
	componentWillUnmount() {
	}

    render() {
        return (
            <RouteTransition
                pathname={this.props.location.pathname}
                atEnter={{ scale: 0.8, opacity: 0 }}
                atLeave={{ scale: -1.2, opacity: 0 }}
                atActive={{ scale: 1, opacity: 1 }}
                mapStyles={styles => ({ transform: `scale(${styles.scale})`, opacity:`${styles.opacity}`  })}
            >
                {this.props.children}
            </RouteTransition>
        );
    }
}

export default HiraganaTransition;
