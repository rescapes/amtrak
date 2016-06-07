/**
 * Created by Andy Likuski on 2016.06.01
 * Copyright (c) 2016 Andy Likuski
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import React, { Component, PropTypes } from 'react'
import {Map} from 'immutable'
import {connect} from 'react-redux';

class Model extends Component {
    /***
     * This seems like the place to bind methods (?)
     * @param props
     */
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { dispatch, url } = this.props
        // Hard-code the initial models and doFetch them here, instead of relying on the user scroll.
        const initialModel = 'train'
        //dispatch(fetchModelIfNeeded(initialModel))
    }

    render() {
        const url = this.props.model && this.props.model.getIn(['url'])
        const style = {position: 'fixed', top: '20px', zIndex: 0}
        return !url ? 
            <div style={style}/> : 
            <div style={style}>  
                <iframe 
                    src="{{url}}"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    width="580"
                    height="326" allowfullscreen>
                </iframe>
            </div>
    }
}

Model.propTypes = {
    model: PropTypes.object
}

function mapStateToProps(state) {
    return {
        model: state.get('model'),
    }
}

export default connect(mapStateToProps)(Model)
