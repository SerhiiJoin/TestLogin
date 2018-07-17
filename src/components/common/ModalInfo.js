
import React, { Component } from 'react';
import {
    Modal,
    View,
    Text
} from 'react-native';
import { Button } from 'native-base';

export default class ModalInfo extends Component {
    render() {
        return (
            <Modal
                visible
                transparent
                onRequestClose={() => { }}
            >
                <View style={styles.modal}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.errorText}>
                            {this.props.message}
                        </Text>

                        <Button full style={styles.button} onPress={this.props.onClose}>
                            <Text style={styles.buttonText}>Close</Text>
                        </Button>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = {
    modal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorText: {
        fontSize: 16,
        textAlign: 'center'
    },
    modalContainer: {
        padding: 30,
        width: 300,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    button: {
        marginTop: 30,
        backgroundColor: '#1c313a'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    }
};
