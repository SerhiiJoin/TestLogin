import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    Text,
    View,
    //StatusBar,
    TouchableOpacity
} from 'react-native';

import { loginUserSuccess } from '../../actions';
import Logo from '../../components/common/Logo';
import Form from '../../components/common/Form';
import ModalInfo from '../../components/common/ModalInfo';

class Login extends Component {
    state = {
        type: 'Login',
        email: '',
        password: '',
        error: '',
        message: '',
        user: null
    };

    toSignUp = () => {
        this.props.navigation.navigate('Signup');
    }

    toHome = () => {
        let loginedUser = null;
        this.props.registeredUsers.map((user) => {
            if (user.email === this.state.email && user.password === this.state.password) {
                loginedUser = user;
            }
        });
        if (loginedUser) {
            this.props.loginUserSuccess(loginedUser);
            this.setState({
                email: '',
                password: '',
                error: '',
                message: '',
                user: null
            });
            this.props.navigation.navigate('Home');
        } else {
            this.setState({ error: 'Error!' });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {!!this.state.error && <ModalInfo message={this.state.error} onClose={() => this.setState({ error: '' })} />}

                <Logo />
                <Form
                    toNumber={this.toHome}
                    type={this.state.type}
                    onEmailChange={email => this.setState({ email: email })}
                    onPasswordChange={password => this.setState({ password: password })}
                    email={this.state.email}
                    password={this.state.password}
                />
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={this.toSignUp}>
                        <Text style={styles.signupButton}>Signup</Text>
                    </TouchableOpacity>

                </View>
            </View >
        );
    }
}

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

const mapStateToProps = ({ auth }) => {
    const { registeredUsers } = auth;
    return { registeredUsers };
};

export default connect(mapStateToProps, { loginUserSuccess })(Login);
