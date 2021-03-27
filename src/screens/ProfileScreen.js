import React from 'react'
import {useContext} from 'react'
import styled from 'styled-components/native'

import {FirebaseContext} from '../context/FirebaseContext'
import {UserContext} from '../context/UserContext'

import Text from '../components/Text'

export default function ProfileScreen() {

    const [user, setUser] = useContext(UserContext);
    const firebase = useContext(FirebaseContext);

    const logOut = async () => {
        const loggedOut = await firebase.logOut()

        if (loggedOut) {
            setUser(state => ({...state, isLoggedIn: false}))
        }
    };

    return (
        <Container>
            <ProfilePhotoContainer>
                <ProfilePhoto  source={
                    user.ProfilePhotoUrl === "default" 
                    ? require("../../assets/EJE.png") 
                    : {uri: user.ProfilePhotoUrl}} />
            </ProfilePhotoContainer>
            <Text meduim bold margin=" 16px 0 32px 0">{user.username}</Text>
           
            <Logout onPress={logOut}>

             <Text meduim bold>logout</Text>
            </Logout>
        </Container>
    );
}

const Container = styled.View`
    
    align-items: center;
    margin-top: 64px;
    flex: 1;
`;
const ProfilePhotoContainer = styled.View`
    shadow-opacity: 0.8;
    shadow-radius: 30px;
    shadow-color: #222222;
`;

const ProfilePhoto = styled.Image`
    width: 128px;
    height: 128px;
    border-radius: 64px;
`;

const Logout = styled.TouchableOpacity`
    margin-bottom: 32px;
`;