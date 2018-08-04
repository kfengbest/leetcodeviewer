import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Text, TouchableHighlight, View, StyleSheet, FlatList} from 'react-native';

class Questions extends Component{
    render(){
        return (
            <View style={styles.container}> 
                <FlatList 
                    data = {[
                        {key: 'devin'},
                        {key: 'jackson'},
                        {key: 'James'},
                    ]}
                    renderItem = {({item})=> <Text style={styles.item}>{item.key}</Text> }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        
    },
    item : {
        padding : 10,
        fontSize : 18,
        height : 44,
    }
});
module.exports = Questions;