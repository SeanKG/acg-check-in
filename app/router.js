import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SignInPage from './pages/SignInPage';
import MainPage from './pages/MainPage';


const AppNavigatorStack = createStackNavigator({
    MainPage: { screen: MainPage },
    SignInPage: { screen: SignInPage }
}, {
        initialRouteName: 'SignInPage'
    });

const AppNavigator = createAppContainer(AppNavigatorStack);

export default AppNavigator;