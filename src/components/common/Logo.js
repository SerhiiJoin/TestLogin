import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{
                    color: 'rgba(255,255,255, 0.7)',
                    fontSize: 26,
                    marginBottom: 10
                }}>LoginApp</Text>
                <Text style={styles.text}>{this.props.type}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#ffffff',
        fontSize: 18
    }
});
