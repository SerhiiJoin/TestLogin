import { createStackNavigator } from 'react-navigation';

import Login from './containers/Auth/Login';
import Signup from './containers/Auth/Signup';
import Home from './containers/Auth/Home';

export const SignedOut = createStackNavigator({
    Login: {
        screen: Login,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
    Signup: {
        screen: Signup,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
    Home: {
        screen: Home,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },

});
