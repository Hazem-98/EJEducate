import React, {useState} from 'react'
import styled from 'styled-components/native'
import { View, Image, StyleSheet } from 'react-native';
import {useContext} from 'react'

import Text from '../components/Text'

import {FirebaseContext} from "../context/FirebaseContext";
import {UserContext} from "../context/UserContext";



export default function SignInScreen({navigation}){

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [loading,setLoading] = useState(false);
    const firebase = useContext(FirebaseContext);
    const [_, setUser] = useContext(UserContext);

    const signIn = async () => {
        setLoading(true)

        try {
            await firebase.signIn(email, password)

            const uid = firebase.getCurrentUser().uid;
            const userInfo = await firebase.getUserInfo(uid);

            setUser({
                username: userInfo.username,
                email: userInfo.email,
                uid,
                profilePhotoUrl: userInfo.profilePhotoUrl,
                isLoggedIn: true,
            });

        }catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    };

    

    return (
        <Container>
        
        <Main>
            <Text title semi center>EJEDUCATE </Text>
        </Main>
        <Image
        style={styles.tinyLogo}
        source={require('../../assets/EJE.png')}
      />
        <Auth>
            <AuthContainer>
                <AuthTitle >Email Adress</AuthTitle>
                <AuthField autoCapitalize="none" autoCompleteType="email"
                autoCorrect={false}
                autoFocus={true}
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

        <SignInContainer onPress={signIn} disabled={loading} >
            {loading ? (
                <Loading />
            ) : (
                <Text bold center color="#ffffff">Sign In
            </Text>
            )}
            
        </SignInContainer>

        <SignUp onPress={() => navigation.navigate("SignUp")}>
            <Text small center>
                New to EJEDUCATE ?{"  "}<Text bold color="#2ea3dd">
                    Sign Up</Text></Text>
        </SignUp>

        <HeadersGrapic>
            <RightCircle />
            <LeftCircle  />
        </HeadersGrapic>
        <Statusbar barStyle="light-content" />
        </Container>
    
    );
}

const Container = styled.View``;

const Main = styled.View`
    margin-top: 60px;
    margin-bottom: 20px;
`;
const Statusbar = styled.View``;
const HeadersGrapic = styled.View`
    position: absolute;
    width: 100%;
`;

const LeftCircle = styled.View`
  

`;

const RightCircle = styled.View``;

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

const SignInContainer =  styled.TouchableOpacity`
    margin: 0 32px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #2ea3dd;
    border-radius: 6px;
`;
 const SignUp =  styled.TouchableOpacity`
    margin-top: 16px;
 `;

 const Loading = styled.ActivityIndicator.attrs(props => ({
     color: "#ffffff",
     size: "small",
 }))``;
 
 const styles = StyleSheet.create({
    tinyLogo:{
        marginBottom: 0,
        width: 150,
        height: 150,
        resizeMode: 'stretch',
        marginLeft: 130

    }
})