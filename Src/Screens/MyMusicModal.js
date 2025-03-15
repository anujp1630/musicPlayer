import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Modal} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../Components/Constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../Components/Screen';
import Slider from '@react-native-community/slider';

const MyMusicModal = ({
  songsList,
  isPlaying,
  Progress,
  CurrentIndex,
  isVisble,
  onClose,
}) => {
  console.log('jj', songsList[CurrentIndex]?.artwork);

  const format = seconds => {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <Modal visible={isVisble} animationType="slide" transparent={true}>
      <LinearGradient
        isVisble={isVisble}
        style={{flex: 1}}
        colors={['#067a02', '#064f03', '#032901', '#000000']}>
        <TouchableOpacity
          onPress={() => {
            onClose();
          }}
          style={{
            paddingHorizontal: SCREEN_WIDTH * 0.025,
            paddingTop: SCREEN_HEIGHT * 0.02,
          }}>
          <AntDesign name="down" size={25} color={'white'} />
        </TouchableOpacity>

        <View style={{alignItems: 'center', paddingTop: SCREEN_HEIGHT * 0.04}}>
          <Image
            style={{
              height: SCREEN_HEIGHT * 0.4,
              width: SCREEN_WIDTH * 0.8,
              borderRadius: 5,
            }}
            source={{uri: songsList[CurrentIndex].artwork}}
          />
        </View>
        <View
          style={{
            gap: 4,
            paddingTop: SCREEN_HEIGHT * 0.01,

            paddingHorizontal: SCREEN_WIDTH * 0.05,
          }}>
          <Text style={{color: colors.white_color, fontSize: 30}}>
            {songsList[CurrentIndex]?.title}
          </Text>
          <Text style={{color: colors.white_color, fontSize: 15}}>
            {songsList[CurrentIndex]?.artist}
          </Text>
        </View>
        <View style={{paddingTop: SCREEN_HEIGHT * 0.05}}>
          <Slider
            style={{width: '90%', height: 40}}
            minimumValue={Progress.position}
            maximumValue={Progress.duration}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: SCREEN_WIDTH * 0.03,
          }}>
          <Text style={{color: colors.white_color, fontSize: 11}}>
            {format(Progress.position)}
          </Text>
          <Text style={{color: colors.white_color, fontSize: 11}}>
            {format(Progress.duration)}
          </Text>
        </View>
      </LinearGradient>
    </Modal>
  );
};

export default MyMusicModal;

const styles = StyleSheet.create({});
