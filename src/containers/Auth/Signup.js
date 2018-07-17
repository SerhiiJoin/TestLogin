import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import Logo from '../../components/common/Logo';
import RegisterForm from '../../components/common/RegisterForm';
import { userChanged } from '../../actions';
import ModalInfo from '../../components/common/ModalInfo';

class Signup extends Component {
    state = {
        type: 'Register',
        user: {},
        error: '',
        message: ''
    };

    setUser = (user) => {
        this.props.userChanged(user);
    }

    toNumber = () => {
        this.props.navigation.navigate('Number');
    }

    toLogin = () => {
        this.props.navigation.navigate('Login');
    }
    render() {
        return (
            <View style={styles.container}>
                {!!this.state.error && <ModalInfo message={this.state.error} onClose={() => this.setState({ error: '' })} />}

                <Logo type={this.state.type} />
                <RegisterForm
                    setUser={this.setUser}
                    navigation={this.props.navigation}
                    type={this.state.type} />
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have account?</Text>
                    <TouchableOpacity
                        onPress={this.toLogin}
                    >
                        <Text style={styles.signupButton}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { user } = auth;
    return { user };
};

export default connect(mapStateToProps, { userChanged })(Signup);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#455a64',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginVertical: 16
    },
    signupText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    }
});
