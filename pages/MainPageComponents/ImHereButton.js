import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import GetLocation from 'react-native-get-location';
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



class ImHereButton extends Component {

    getLocation = () => {}

    render() {
        return (
            <Container style={styles.container}>
                <Content padder style={{ backgroundColor: "#FFF", padding: 20 }}>
                    <Button block success style={styles.mb15} onPress={
                        () => {GetLocation.getCurrentPosition({
                            enableHighAccuracy: true,
                            timeout: 2000,
                        })
                        .then(location => {
                            alert(location);
                        })
                        .catch(error => {
                            const { code, message } = error;
                            alert(message +"erorororrororo");
                        })}
                    }>
                        <Text>Im Here</Text>
                    </Button>
                    <Button block danger style={styles.mb15}>
                        <Text>Sorry I can't show up</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF"
    },
    mb15: {
        marginBottom: 20
    },
});

export default ImHereButton;