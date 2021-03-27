import React from 'react'
import styled from 'styled-components/native'
import {Entypo, Ionicons} from '@expo/vector-icons'
import colors from '../components/Color'
import coursData from '../data/CoursData'
import LearnMoreData from '../data/LearnMoreDate'
import contactData from '../data/Contact'

import {ScrollView, TextInput} from 'react-native-gesture-handler'
import {Text,View, StyleSheet,  ImageBackground,Image, } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import { color } from 'react-native-reanimated'
import Feather from 'react-native-vector-icons/Feather';

import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';






const renderActivityItem = ({item}) => {
    return (
      <View
        style={[
          styles.activityItemWrapper,
          {
            marginLeft: item.id === 'activities-1' ? 20 : 0,
          },
        ]}>
        <Image source={item.image} style={styles.activityItemImage} />
        <Text style={styles.activityItemText}>{item.title}</Text>
      </View>
    );
  };

  const renderLearnMoreItem = ({item}) => {
    return (
      <ImageBackground
        source={item.image}
        style={[
          styles.learnMoreItem,
          {
            marginLeft: item.id === 'learnMore-1' ? 20 : 0,
          },
        ]}
        imageStyle={styles.learnMoreItemImage}>
        <Text style={styles.learnMoreItemText}>{item.title}</Text>
      </ImageBackground>
    );
  };



export default function HomeScreen({navigation}) {
    const renderDiscoverItem = ({item}) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Details', {
                item: item,
              })
            }>
            <ImageBackground
              source={item.image}
              style={[
                styles.discoverItem,
                {marginLeft: item.id === 'discover-1' ? 20 : 0},
              ]}
              imageStyle={styles.discoverItemImage}>
              <Text style={styles.discoverItemTitle}>{item.title}</Text>
              <View style={styles.discoverItemLocationWrapper}>
                <Entypo name="location-pin" size={18} color={colors.white} />
                <Text style={styles.discoverItemLocationText}>{item.location}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        );
      };
    return (
        <View style={styles.container}>
            <ScrollView>

        {/* Discover */}
        <View style={styles.discoverWrapper}>
          <Text style={styles.discoverTitle}>Discover</Text>
          <View style={styles.discoverCategoriesWrapper}>
              
            <Text style={[styles.discoverCategoryText, {color: colors.bleu}]}>
              All
            </Text>
            <Text style={styles.discoverCategoryText}>WEB development</Text>
            <Text style={styles.discoverCategoryText}>Mobile development</Text>
            <Text style={styles.discoverCategoryText}>IA</Text>
            
          </View>
          <View style={styles.discoverItemsWrapper}>
            <FlatList
              data={coursData}
              renderItem={renderDiscoverItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
         {/* Search */}
         <View style={styles.searchWrapper}>
          <Feather name="search" size={16} color={colors.textDark} />
          <View style={styles.search}>
            <TextInput style={styles.searchText}>Search </TextInput>
          </View>
        </View>



        {/* Learn More */}
        <View style={styles.learnMoreWrapper}>
          <Text style={styles.learnMoreTitle}>Learn More</Text>
          <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              data={LearnMoreData}
              renderItem={renderLearnMoreItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

          {/* Contact*/}
          <View style={styles.learnMoreWrapper}>
          <Text style={styles.learnMoreTitle}>parite</Text>
          <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              data={LearnMoreData}
              renderItem={renderLearnMoreItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
          {/* Learn More */}
          <View style={styles.learnMoreWrapper}>
          <Text style={styles.learnMoreTitle}>Nos réseaux Sociaux</Text>
          <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              data={contactData}
              renderItem={renderLearnMoreItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>    
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: colors.white,
      },
      menuWrapper: {
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      profileImage: {
        width: 52,
        height: 52,
        borderRadius: 10,
      },
      discoverWrapper: {
        //marginHorizontal: 20,
        marginTop: 20,
      },
      discoverTitle: {
        marginHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 32,
      },
      discoverCategoriesWrapper: {
        marginHorizontal: 20,
        flexDirection: 'row',
        marginTop: 20,
      },
      discoverCategoryText: {
        marginRight: 30,
        
        fontSize: 16,
        color: colors.gray,
      },
      discoverItemsWrapper: {
        paddingVertical: 20,
      },
      discoverItem: {
        width: 170,
        height: 250,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginRight: 20,

      },
      discoverItemImage: {
        borderRadius: 20,
      },
      discoverItemTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.bleu,
        shadowOpacity: 4,
      },
      discoverItemLocationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
      },
      discoverItemLocationText: {
        marginLeft: 5,
        fontWeight: 'bold',
        fontSize: 14,
        color: colors.white,
      },
      activitiesWrapper: {
        marginTop: 10,
      },
      activitiesTitle: {
        marginHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.black,
      },
      activitiesItemsWrapper: {
        paddingVertical: 20,
      },
      activityItemWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 20,
      },
      activityItemImage: {
        width: 36,
      },
      activityItemText: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 14,
        color: colors.gray,
      },
      learnMoreWrapper: {
        marginTop: 10,
      },
      learnMoreTitle: {
        marginHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.black,
      },
      learnMoreItemsWrapper: {
        paddingVertical: 20,
      },
      learnMoreItem: {
        width: 170,
        height: 180,
        justifyContent: 'flex-end',
        marginRight: 20,
      },
      learnMoreItemImage: {
        borderRadius: 20,
      },
      learnMoreItemText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.white,
        marginHorizontal: 10,
        marginVertical: 20,
      },
      searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30,
      },
      search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.bleuf,
        borderBottomWidth: 2,
      },
      searchText: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 5,
        color: colors.gray,
      },
    });



