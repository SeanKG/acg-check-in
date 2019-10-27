import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Item,
    Input,
    Body,
    Left,
    Right,
    Icon,
    Form,
    Text
} from "native-base";

class SignInPage extends Component {

    state = {
        username: '',
        password: ''
    }

    handleusernameChange = username => {
        this.setState({ username })
    }

    handlePasswordChange = password => {
        this.setState({ password })
    }

    onLogin = async () => {
        const { username, password } = this.state
        try {
            if (username.length > 0 && password.length > 0) {
                this.props.navigation.navigate('GuardLocationPage', {
                    username: username,
                    password: password
                })
            }
        } catch (error) {
            alert(error)
        }
    }

    render() {
        const { username, password } = this.state
        return (
            <Container style={styles.container}>
                <Content>
                    <Form>
                        <Item>
                            <Input
                                placeholder="username"
                                name='username'
                                value={username}
                                placeholder='Enter username'
                                autoCapitalize='none'
                                onChangeText={this.handleusernameChange}
                            />
                        </Item>
                        <Item last>
                            <Input
                                secureTextEntry
                                name='password'
                                value={password}
                                placeholder='Enter password'
                                secureTextEntry
                                onChangeText={this.handlePasswordChange}
                            />
                        </Item>
                    </Form>
                    <Button block style={{ margin: 15, marginTop: 50 }} onPress={this.onLogin}>
                        <Text>Sign In</Text>
                    </Button>
                    <Button block style={{ margin: 15, marginTop: 50, backgroundColor: 'red' }}>
                        <Text>Sign up</Text>
                    </Button>
                </Content>
            </Container >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF"
    }
});

export default SignInPage;