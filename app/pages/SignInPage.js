import React, { Component } from "react";
import axios from "axios";
import { StyleSheet, AsyncStorage } from 'react-native'
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
            await AsyncStorage.setItem('username', "lololo");
            this.props.navigation.navigate('GuardLocationPage');
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
                                onChangeText={username => this.setState({ username })}
                                placeholder="username"
                                value={this.state.username}
                            />
                        </Item>
                        <Item last>
                            <Input
                                onChangeText={password => this.setState({ password })}
                                value={this.state.password}
                                name='password'
                                placeholder='Enter password'
                                secureTextEntry
                            />
                        </Item>
                    </Form>
                    {this.state.spinner &&
                        <Text>Processing ...</Text>
                    }
                    {!this.state.spinner &&
                        <Button block style={{ margin: 15, marginTop: 50 }} onPress={this._signInHandler}>
                            <Text>Sign In</Text>
                        </Button>
                    }
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