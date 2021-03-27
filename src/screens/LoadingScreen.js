import React,{ useEffect} from 'react'
import {useContext} from 'react'

import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'
import { View, Image, StyleSheet } from 'react-native';


import {UserContext} from "../context/UserContext"
import {FirebaseContext, FirebaseProvider} from "../context/FirebaseContext"

import Text from '../components/Text'

export default function LoaingScreen() {

    const [_,setUser] = useContext(UserContext);
    const firebase = useContext(FirebaseContext);
    
    useEffect(() => {
        setTimeout(async () => {
            const user = firebase.getCurrentUser()

            if (user) {
                const userInfo = await firebase.getUserInfo(user.uid)

                setUser({
                    isLoggedIn: true,
                    email: userInfo.email,
                    uid: user.uid,
                    username: userInfo.username,
                    profilePhotoUrl: userInfo.profilePhotoUrl
                })

            } else {
                setUser((state) => ({ ...state, isLoggedIn: false}));

            }


        }, 500)
    }, [])

    return (
        <Container>
            <Image
        style={styles.tinyLogo}
        source={require('../../assets/EJE.png')}
      />
            <Text title color="#1f212d">
                EJEducate is loading
            </Text>

        
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
`;

const styles = StyleSheet.create({
    tinyLogo:{
        width: 150,
        height: 150,
        resizeMode: 'stretch',

    }
})



