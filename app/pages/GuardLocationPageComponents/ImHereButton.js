import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import axios from "axios";
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

    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            username: this.props.username,
            usertoken: this.props.usertoken
        };
        this._getLocation();
    }

    _getLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            if (position && position.coords) {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            }
        }, err => {
            console.log(err)
            alert('fetching the position failed')
        }, { enableHighAccuracy: false, timeout: 2000, maximumAge: 0 })
    }

    _postLocation = async () => {
        const { username, usertoken, latitude, longitude } = this.state;

        const formData = {
            username: username,
            usertoken: usertoken,
            longitude: longitude,
            latitude: latitude
        }

        console.log("state on submision" + formData.longitude)

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
                console.log(response)
                return response;
            })
            .catch(error => {
                throw error;
            });

        if (typeof response.message != "undefined") {
            await Alert.alert('Error', response);
        }
        else {
            alert("posting success")
        }
    }

    render() {
        const { username, usertoken } = this.props
        return (
            <Container style={styles.container}>
                <Content padder style={{ backgroundColor: "#FFF", padding: 20 }}>
                    <Button block success style={styles.mb15} onPress={() => this._postLocation()}>
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