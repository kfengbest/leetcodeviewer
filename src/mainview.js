import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigatorIOS, Text, TouchableHighlight, View} from 'react-native';

import Questions from './questions'

class MainView extends Component{

    render(){
        return (
            <NavigatorIOS
                initialRoute = {{
                    component : Questions,
                    title : 'Questions',
                }}
                style = {{flex:1}}
            />
        );
    }
}



module.exports = MainView;
