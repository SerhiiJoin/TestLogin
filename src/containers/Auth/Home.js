import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    View
} from 'react-native';


import Logo from '../../components/common/Logo';
import FormButtons from '../../components/common/FormButtons';
import FormInfoLogin from '../../components/common/FormInfoLogin';
import ModalInfo from '../../components/common/ModalInfo';
import { logOutUser } from '../../actions';

class Home extends Component {
    state = {
        user: {},
        error: '',
        message: ''
    };

    componentWillMount() {
        this.setState({
            user: this.props.user
        });
    }

    logOut = () => {
        this.props.logOutUser();
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <View style={styles.container}>
                {!!this.state.error && <ModalInfo message={this.state.error} onClose={() => this.setState({ error: '' })} />}

                <Logo />
                <FormInfoLogin user={this.props.user} />
                <FormButtons
                    logOut={this.logOut}
                />
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
    }
});

const mapStateToProps = ({ auth }) => {
    const { user } = auth;
    return { user };
};

export default connect(mapStateToProps, { logOutUser })(Home);
