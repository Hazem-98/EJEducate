import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native'
import {Platform} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import * as Permissions from "expo-permissions";
import {FirebaseContext} from '../context/FirebaseContext'
import {UserContext} from '../context/UserContext'
import { KeyboardAvoidingView, StyleSheet } from 'react-native'

import {useContext} from 'react'

import Text from '../components/Text'
import * as ImagePicker from 'expo-image-picker';


export default function SignUpScreen({navigation}){

    const [username,setUsername] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [loading,setLoading] = useState(false); 
    const [profilePhoto,setProfilePhoto] = useState(false); 
    const firebase = useContext(FirebaseContext)
    const [_, setUser] = useContext(UserContext)



  /*  const getPermission = async () => {
        if (Platfrom.OS !== 'web') {
            const {status} = await Permissions.askAsync(Permissions.MEDIA_LIBRARY)

            return status
        }
    };
    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            })
            if (!result.cancelled) {
                setProfilePhoto(result.uri)
            }
        }catch (error) {
            console.log("Error @pickImage:", error)
        }
    }

    const addProfilePhoto = async () => {
        const status = await getPermission();

        if (status !== "granted") {
            alert("We need permission to access")
            return;
        }
        pickImage()
    };
    */

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);
    
      const addProfilePhoto = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
            setProfilePhoto(result.uri);
        }
      };
    
    const signUp = async () => {
        setLoading(true);

        const user = { username, email, password, profilePhoto };

        try {
            const createdUser = await firebase.createUser(user);

            setUser({ ...createdUser, isLoggedIn: true });

        } catch (error) {
            console.log("Error @signUp :", error);
        } finally {}
        setLoading(false);
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container} >
        <Container>
        <Main>
            <Text title semi center>Sign Up to get Started </Text>
        </Main>

        <ProfilePhotoContainer onPress={addProfilePhoto}>
            {profilePhoto ? (
                <ProfilePhoto source={{uri: profilePhoto}} />
            ) : (

                <DefaultProfilePhoto>
                <AntDesign name="plus" size={24} color="#ffffff" />
            </DefaultProfilePhoto>
            )}


        </ProfilePhotoContainer>
 

        <Auth>

        <AuthContainer>
                <AuthTitle >User Name</AuthTitle>
                <AuthField autoCapitalize="none" 
                autoCorrect={false}
                autoFocus={true}
                keyboardTyp="email-address"
                onChangeText={username => setUsername(username.trim())}
                value={username}
                />
            </AuthContainer>
            <AuthContainer>
                <AuthTitle >Email Address</AuthTitle>
                <AuthField autoCapitalize="none" autoCompleteType="email"
                autoCorrect={false}
                keyboardTyp="email-address"
                onChangeText={email => setEmail(email.trim())}
                value={email}
                />
            </AuthContainer>

            <AuthContainer>
                <AuthTitle >PASSWORD</AuthTitle>
                <AuthField autoCapitalize="none" 
                autoCompleteType="password"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={password => setPassword(password.trim())}
                value={password}
                />
            </AuthContainer>

        </Auth>

        <SignUpContainer onPress={signUp} disabled={loading} >
            {loading ? (
                <Loading />
            ) : (
                <Text bold center color="#ffffff">Sign Up
            </Text>
            )}
            
        </SignUpContainer>

        <SignIn onPress={() => navigation.navigate("SignIn")}>
            <Text small center>
                Already have an acount ?{"  "}<Text bold color="#2ea3dd">
                    Sign In</Text></Text>
        </SignIn>

        <HeadersGrapic>

        </HeadersGrapic>
        <Statusbar barStyle="light-content" />
        </Container>
        </KeyboardAvoidingView>
    
    );
}

const Container = styled.View``;

const Main = styled.View`
    margin-top: 140px;
`;

const ProfilePhotoContainer = styled.TouchableOpacity`
    background-color: #e1e2e6;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    align-self: center;
    margin-top: 16px;
    overflow: hidden;
`;

const DefaultProfilePhoto = styled.View`
    align-items: center;
    justify-content: center;
    flex:1;
`;
const ProfilePhoto = styled.Image`
    flex: 1;
`;

const Statusbar = styled.View``;
const HeadersGrapic = styled.View`
    position: absolute;
    width: 100%;
`;




const Auth = styled.View`
    margin: 64px 32px 32px;
`;

const AuthContainer = styled.View`
    margin-bottom: 32px;
`;

const AuthTitle = styled(Text)`
    color: #8e93a1;
    font-size: 12px;
    text-transform: uppercase;
`;

const AuthField = styled.TextInput`
    border-bottom-color: #8e93a1;
    border-bottom-width: 0.5px;
    height: 48px;

`;

const SignUpContainer =  styled.TouchableOpacity`
    margin: 0 32px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #2ea3dd;
    border-radius: 6px;
`;
 const SignIn =  styled.TouchableOpacity`
    margin-top: 16px;
 `;

 const Loading = styled.ActivityIndicator.attrs(props => ({
     color: "#ffffff",
     size: "small",
 }))``;

 const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    }
})
