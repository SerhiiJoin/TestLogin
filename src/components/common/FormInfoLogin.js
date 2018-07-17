import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class FormInfoLogin extends Component {
    state = {
        user: {
            name: '',
            email: ''
        }
    };
    componentWillReceiveProps(nextProps) {
        this.setState({
            user: nextProps.user
        });
    }
    componentWillMount() {
        this.setState({
            user: this.props.user
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{`Hi, ${this.state.user.name}!`}</Text>
                <Text style={styles.text}>{`Your mail ${this.state.user.email}`}</Text>
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
        fontSize: 26,
        fontWeight: '500',
        paddingVertical: 10,
    }
});
