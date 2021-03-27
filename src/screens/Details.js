import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../components/Color';
import Entypo from 'react-native-vector-icons/Entypo';

const height = Dimensions.get('window').height;

const Details = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground source={item.imageBig} style={styles.backgroundImage}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={32} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.titlesWrapper}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <View style={styles.locationWrapper}>
            <Entypo name="location-pin" size={24} color={colors.white} />
            <Text style={styles.locationText}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.descriptionWrapper}>
        <View style={styles.heartWrapper}>
          <Entypo name="heart" size={32} color={colors.orange} />
        </View>
        <View style={styles.descriptionTextWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>

        <View style={styles.infoWrapper}>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>Number of persons</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>{item.price}</Text>
              <Text style={styles.infoSubText}>/person</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>RATING</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>{item.rating}</Text>
              <Text style={styles.infoSubText}>/5</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>DURATION</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>{item.duration}</Text>
              <Text style={styles.infoSubText}> hours</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => alert('You booked a trip!')}>
          <Text style={styles.buttonText}>Enroll Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    height: height * 0.6,
    justifyContent: 'space-between',
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20,
    borderRadius: 25,
  },
  backIcon: {
    marginLeft: 20,
    marginTop: 60,
  },
  titlesWrapper: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 32,
    color: colors.white,
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.white,
  },
  heartWrapper: {
    position: 'absolute',
    right: 40,
    top: -30,
    width: 64,
    height: 64,
    backgroundColor: colors.white,
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  descriptionTextWrapper: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  descriptionTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: colors.black,
  },
  descriptionText: {
    marginTop: 10,
    
    fontSize: 16,
    color: colors.darkGray,
    height: 85,
  },
  infoWrapper: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  infoItem: {},
  infoTitle: {
    fontWeight: 'bold',
    fontSize: 12,
    color: colors.bleu,
  },
  infoTextWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 1,
  },
  infoText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: colors.orange,
  },
  infoSubText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.gray,
  },
  buttonWrapper: {
    marginHorizontal: 20,
    marginBottom: 1,
    marginTop: 40,
    backgroundColor: colors.bleu,
    alignItems: 'center',
    paddingVertical: 1,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.white,
  },
});

export default Details;