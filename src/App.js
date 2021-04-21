import React, { Component,Fragment } from 'react';
import Demo from './components/01_setState'
class App extends Component {
    render() {
        return (
            <Fragment key={1}>
               <Demo name='罗建辉' />
            </Fragment>
        );
    }
}

export default App;