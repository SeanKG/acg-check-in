import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SignInPage from './pages/SignInPage';
import GuardLocationPage from './pages/GuardLocationPage';


const AppNavigatorStack = createStackNavigator({
    GuardLocationPage: { screen: GuardLocationPage },
    SignInPage: { screen: SignInPage }
}, {
        initialRouteName: 'SignInPage'
    });

const AppNavigator = createAppContainer(AppNavigatorStack);

export default AppNavigator;