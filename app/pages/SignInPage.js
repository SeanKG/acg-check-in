import React, { Component } from "react";
import axios from "axios";
import { StyleSheet, AsyncStorage, KeyboardAvoidingView } from 'react-native'
import { SocialIcon } from 'react-native-elements'
import {
    Container,
    Header,
    Title,
    Content,
    Label,
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

import LogoIcon from './Icon';

class SignInPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            spinner: false
        };

        this._signInHandler = this._signInHandler.bind(this);
    }

    _signInHandler = async () => {
        const { username, password } = this.state;

        if (!username || !password) {
            alert("Please put username and password")
            return
        }

        const formData = {
            username: username,
            password: password
        }

        this.setState({ spinner: true });

        const response = await axios({
            method: 'post',
            url: `https://reqres.in/api/users`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: formData
        })
            .then(response => {
                this.setState({ spinner: false });
                return response;
            })
            .catch(error => {
                this.setState({ spinner: false });
                throw error;
            });

        if (typeof response.message != "undefined") {
            await Alert.alert('Error', response);
        }
        else {
            console.log(response)
            await AsyncStorage.setItem('usertoken', "hitoken");
            await AsyncStorage.setItem('username', "JohnOSC");
            this.props.navigation.navigate('GuardLocationPage');
        }
    }


    render() {
        const { username, password } = this.state
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
                <Content>
                    <Container style={styles.mainContainer}>
                        <Container style={styles.containerCentered}>
                            <LogoIcon name="LogoNoText" height="120" width="120" />
                        </Container>
                        <Form>
                            <Item floatingLabel>
                                <Label style={styles.placeholder}>Enter Username</Label>
                                <Input
                                    onChangeText={username => this.setState({ username })}
                                    value={this.state.username}
                                />
                            </Item>
                            <Item floatingLabel>
                                <Label style={styles.placeholder}>Enter Password</Label>
                                <Input
                                    onChangeText={password => this.setState({ password })}
                                    value={this.state.password}
                                    name='password'
                                    secureTextEntry
                                />
                            </Item>
                        </Form>
                        {this.state.spinner &&
                            <Text>Processing ...</Text>
                        }
                        {!this.state.spinner &&
                            <Container>
                                <Button rounded style={styles.signInButtons} onPress={this._signInHandler}>
                                    <Text>Log In</Text>
                                </Button>
                            </ Container>
                        }
                        <Container style={styles.containerCentered}>
                            <SocialIcon
                                type='twitter'
                            />
                            <SocialIcon
                                type='facebook'
                            />
                        </ Container>
                        <Text style={styles.signUpButtons} onPress={this._signInHandler}>Sign up</Text>
                    </Container >
                </Content>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    containerCentered: {
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    mainContainer: {
        backgroundColor: "#FFF",
        margin: 20,
        marginRight: 35
    },
    signInButtons: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2c2a29",
        margin: 15,
        marginTop: 60,
    },
    signUpButtons: {
        color: "black",
        opacity: 0.5,
        flex: 1,
        marginBottom: 60,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        textDecorationLine: "underline"
    },
    placeholder: {
        opacity: 0.6
    },
    form: {
    }
});

export default SignInPage;