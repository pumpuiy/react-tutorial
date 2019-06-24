import React, {Component} from 'react';

class Hello extends Component{

    componentDidMount(){
        console.log('in Hello component');
    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
            </div>
        )
    }
}

export default Hello;