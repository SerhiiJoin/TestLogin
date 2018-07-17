import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class FormButtons extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.panel}>
                    <TouchableOpacity
                        onPress={this.props.logOut}
                        style={styles.btn}>
                        <Text style={styles.btnText}>LogOut</Text>
                    </TouchableOpacity>
                </View>

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
    panel: {
        flexDirection: 'row'
    },
    btn: {
        width: 150,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        paddingVertical: 12,
        marginVertical: 10,
        marginHorizontal: 10
    },
    btnText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});
