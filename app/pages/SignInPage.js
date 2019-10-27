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
    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Placeholder Label</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="Username" />
                        </Item>
                        <Item last>
                            <Input placeholder="Password" secureTextEntry />
                        </Item>
                    </Form>
                    <Button block style={{ margin: 15, marginTop: 50 }} onPress={() => {
                        this.props.navigation.navigate("MainPage");
                    }}>
                        <Text>Sign In</Text>
                    </Button>
                    <Button block style={{ margin: 15, marginTop: 50, backgroundColor: 'red' }}>
                        <Text>Sign up</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF"
    }
});

export default SignInPage;