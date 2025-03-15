import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Modal} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../Components/Constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../Components/Screen';
import Slider from '@react-native-community/slider';
import TrackPlayer from 'react-native-track-player';
import MyStatusBar from '../Components/MyStatusBar';

const MyMusicModal = ({
  songsList,
  isPlaying,
  Progress,
  CurrentIndex,
  isVisble,
  onClose,
}) => {
  console.log('jj', songsList[CurrentIndex]?.artwork);
  const [Currentsongindex, SetCurrentsongindex] = useState(CurrentIndex);

  const format = seconds => {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <Modal visible={isVisble} animationType="slide" transparent={true}>
      <MyStatusBar backgroundColor={'#067a02'} />
      <LinearGradient
        isVisble={isVisble}
        style={{flex: 1}}
        colors={['#067a02', '#064f03', '#032901', '#000000']}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: SCREEN_WIDTH * 0.05,
            paddingTop: SCREEN_HEIGHT * 0.02,
            paddingBottom: SCREEN_HEIGHT * 0.02,
          }}>
          <TouchableOpacity
            onPress={() => {
              onClose();
            }}
            style={{
              paddingTop: SCREEN_HEIGHT * 0.02,
            }}>
            <AntDesign name="down" size={25} color={'white'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{color: 'white', fontSize: 13, fontWeight: '500'}}>
              Recent Searches
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="dots-three-horizontal" color={'white'} size={20} />
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center', paddingTop: SCREEN_HEIGHT * 0.04}}>
          <Image
            style={{
              height: SCREEN_HEIGHT * 0.4,
              width: SCREEN_WIDTH * 0.8,
              borderRadius: 8,
            }}
            source={{uri: songsList[CurrentIndex].artwork}}
          />
        </View>
        <View
          style={{
            gap: 5,
            paddingTop: SCREEN_HEIGHT * 0.05,

            paddingHorizontal: SCREEN_WIDTH * 0.05,
          }}>
          <Text style={{color: colors.white_color, fontSize: 30}}>
            {songsList[CurrentIndex]?.title}
          </Text>
          <Text style={{color: colors.white_color, fontSize: 15}}>
            {songsList[CurrentIndex]?.artist}
          </Text>
        </View>
        <View style={{alignItems: 'center', paddingTop: SCREEN_HEIGHT * 0.015}}>
          <Slider
            style={{width: '95%', height: 40}}
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
            paddingHorizontal: SCREEN_WIDTH * 0.05,
          }}>
          <Text style={{color: colors.white_color, fontSize: 10}}>
            {format(Progress.position)}
          </Text>
          <Text style={{color: colors.white_color, fontSize: 10}}>
            {format(Progress.duration)}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingTop: SCREEN_HEIGHT * 0.025,
          }}>
          <TouchableOpacity>
            <AntDesign name="stepbackward" size={30} color={'white'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              if (isPlaying) {
                await TrackPlayer.pause();
              } else {
                await TrackPlayer.play();
              }
            }}>
            {isPlaying ? (
              <AntDesign name="pausecircle" size={60} color={'white'} />
            ) : (
              <AntDesign name="play" size={60} color={'white'} />
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="stepforward" size={30} color={'white'} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </Modal>
  );
};

export default MyMusicModal;

const styles = StyleSheet.create({});
