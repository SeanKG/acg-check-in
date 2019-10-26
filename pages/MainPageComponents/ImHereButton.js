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

    render() {
        return (
            <Container style={styles.container}>
                <Content padder style={{ backgroundColor: "#FFF", padding: 20 }}>
                    <Button block success style={styles.mb15} onPress={
                        () => {
                            navigator.geolocation.getCurrentPosition(position => {
                                if (position) {
                                    alert("latitude : " + position.coords.latitude + "\n longitude :" + position.coords.longitude)
                                }
                            }, err => {
                                console.log(err)
                                alert('fetching the position failed')
                            }, { enableHighAccuracy: false, timeout: 20000, maximumAge: 0 })
                        }
                    }>
                        <Text>Im Here</Text>
                    </Button>
                    <Button block danger style={styles.mb15}>
                        <Text>Sorry I can't show up</Text>
                    </Button>
                </Content>
            </Container >
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