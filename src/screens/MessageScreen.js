import React from 'react'
import { StyleSheet, View } from 'react-native'
import Text from '../components/Text'

export default function MessageScreen() {
    return (
        <View style={styles.container}>
            <Text title center >Message Screen</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
})
