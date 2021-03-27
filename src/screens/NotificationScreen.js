import React, {useState} from 'react'
import { FlatList ,StyleSheet, Text, View, TouchableOpacity,Modal } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import colors from '../components/Color'
import { color } from 'react-native-reanimated'
import tempData from '../data/tempData'
import TodoList from '../components/TodoList'


export default function NotificationScreen() {


    return (
        <View style={styles.container}>


          <View style={{flexDirection: "row"}}>
              <View style={styles.divider} />
                <Text style={styles.title}>TO do
                <Text style={{ fontWeight: "300", color: colors.bleu}}>
                  Lists  </Text></Text>
                  <View style={styles.divider} />  
          </View>

          <View style={{marginVertical: 48}}>
              <TouchableOpacity style={styles.addList}>
                <AntDesign name="plus" size={16} color={color.bleu} />
              </TouchableOpacity>

              <Text style={styles.add}>Add List</Text>

          </View>

            <View style={{height: 275, paddingLeft: 32}}>
                <FlatList
                data={tempData} keyExtractor={item => item.name}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <TodoList list={item}/> } />

                
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ebecf3",
        justifyContent:"center",
        alignItems: "center",
    },
    divider: {
        backgroundColor: colors.bleu,
        height: 1,
        flex: 1,
        alignSelf: "center"
    },
    title: {
        fontSize: 38,
        fontWeight: '800',
        color: colors.bleuf,
        paddingHorizontal: 64,
    },
    addList:{
        borderWidth: 2,
        borderColor: colors.bleu,
        borderRadius: 4,
        padding: 16 ,
        alignItems: "center",
        justifyContent: "center",
    },
    add:{
        color: colors.bleuf,
        fontWeight: "800",
        fontSize: 14,
        marginTop: 8,
    },
    input: {
       
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 320,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent:'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        
    },
    addText: {},
});
