import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Text
} from "native-base";

class Header2 extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Content padder>
                    <Text>Header with Icon Buttons</Text>
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

export default Header2;