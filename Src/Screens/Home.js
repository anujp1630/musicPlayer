import {
  StyleSheet,
  Text,
  View,
  Image,
  Flatlist,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../Components/Constants';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Entypo from 'react-native-vector-icons/Entypo';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../Components/Screen';
import {songsList} from '../Components/Songs';
import MyStatusBar from '../Components/MyStatusBar';
import TrackPlayer, {Capability, useProgress} from 'react-native-track-player';
import {usePlaybackState, State} from 'react-native-track-player';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MyMusicModal from './MyMusicModal';

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [CurrentIndex, SetCurrentIndex] = useState(0);
  const playbackstate = usePlaybackState();
  const Progress = useProgress();
  const [isVisble, SetIsvisble] = useState(false);

  const handlePlayPause = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    SetUpPlayer();
  }, []);
  const SetUpPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add(songsList);
      await TrackPlayer.updateOptions({
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.Stop,
        ],

        compactCapabilities: [Capability.Play, Capability.Pause],
      });
    } catch (e) {}
  };
  //   useEffect(() => {
  //     if (isPlaying) {
  //       if (Progress.position.toFixed(0) == Progress.duration.toFixed(0)) {
  //         if (CurrentIndex < songsList.length) {
  //           SetCurrentIndex(CurrentIndex + 1);
  //         }
  //       }
  //     }
  //   }, [Progress]);
  return (
    <LinearGradient
      colors={[
        colors.background_theme2,
        colors.background_theme4,
        colors.background_theme3,
        colors.background_theme5,
      ]}
      style={{flex: 1}}>
      <MyStatusBar backgroundColor={colors.background_theme2} />
      <ScrollView style={{flex: 1}}>
        <MyStatusBar style={{flex: 1}} />
        {Header()}

        {banner()}
        {Englishsongs()}
        {ListOfSongs()}
      </ScrollView>
      {BottomPlayer()}
      <MyMusicModal
        songsList={songsList}
        isPlaying={isPlaying}
        Progress={Progress}
        CurrentIndex={CurrentIndex}
        isVisble={isVisble}
        onClose={() => SetIsvisble(false)}
      />
    </LinearGradient>
  );
  function Header() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: SCREEN_WIDTH * 0.04,
          paddingHorizontal: SCREEN_WIDTH * 0.03,
          paddingTop: SCREEN_HEIGHT * 0.03,
        }}>
        <View
          style={{
            elevation: 1,
            height: SCREEN_HEIGHT * 0.05,
            width: SCREEN_WIDTH * 0.1,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
            backgroundColor: '#1DB954',
          }}>
          <Text style={{color: 'black', fontWeight: '500'}}>A</Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: colors.white_color,
            }}>
            Welcome Anuj
          </Text>
        </View>
      </View>
    );
  }
  function Search() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: SCREEN_WIDTH * 0.04,
        }}>
        <View
          style={{
            borderRadius: 5,
            width: SCREEN_WIDTH * 0.73,
            paddingVertical: SCREEN_HEIGHT * 0.013,
            backgroundColor: colors.Search_color,
            flexDirection: 'row',
            paddingHorizontal: SCREEN_WIDTH * 0.02,
            gap: SCREEN_WIDTH * 0.02,
            elevation: 10,
          }}>
          <AntDesign name="search1" size={25} color={'white'} />

          <Text style={{color: colors.background_theme1, fontSize: 18}}>
            Find in Playlist
          </Text>
        </View>

        <View
          style={{
            width: SCREEN_WIDTH * 0.15,
            paddingVertical: SCREEN_HEIGHT * 0.013,
            backgroundColor: colors.Search_color,
            alignItems: 'center',
            borderRadius: 5,
            elevation: 10,
          }}>
          <Text style={{color: colors.background_theme1, fontSize: 18}}>
            Sort
          </Text>
        </View>
      </View>
    );
  }
  function banner() {
    return (
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
    );
  }

  function Englishsongs() {
    return (
      <View>
        <View>
          <Text
            style={{
              color: colors.white_color,
              fontSize: 24,
              paddingTop: SCREEN_HEIGHT * 0.02,
              paddingHorizontal: SCREEN_WIDTH * 0.04,
              fontWeight: '500',
            }}>
            {songsList[CurrentIndex].title}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 15,
            paddingHorizontal: SCREEN_WIDTH * 0.02,
            paddingTop: SCREEN_WIDTH * 0.05,
          }}>
          <Image
            style={{
              height: SCREEN_HEIGHT * 0.06,
              width: SCREEN_WIDTH * 0.12,
              borderRadius: 100,
            }}
            source={require('../Assets/Images/Sportify.png')}
          />
          <Text style={{color: colors.background_theme1, fontSize: 18}}>
            Trending Songs
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 20,
            paddingHorizontal: SCREEN_WIDTH * 0.02,
            paddingTop: SCREEN_HEIGHT * 0.01,
          }}>
          <Text style={{color: '#bababa', fontSize: 12}}>20,169 Saves</Text>
          <Text style={{color: '#bababa', fontSize: 12}}>4 h 200 m</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: SCREEN_WIDTH * 0.02,
            paddingTop: SCREEN_HEIGHT * 0.02,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: SCREEN_WIDTH * 0.03,
            }}>
            <AntDesign name="pluscircleo" color={'white'} size={20} />

            <Entypo name="arrow-with-circle-down" color={'white'} size={20} />
            <Entypo name="dots-three-horizontal" color={'white'} size={20} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: SCREEN_WIDTH * 0.04,
            }}>
            <AntDesign name="retweet" color={'white'} size={20} />

            <TouchableOpacity onPress={handlePlayPause}>
              {isPlaying ? (
                <AntDesign name="pausecircle" size={35} color={'#1DB954'} />
              ) : (
                <AntDesign name="play" size={35} color={'#1DB954'} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  function ListOfSongs() {
    const renderItem = ({item, index}) => {
      return (
        <TouchableOpacity
          onPress={async () => {
            TrackPlayer.pause();
            TrackPlayer.skip(index);
            TrackPlayer.play();

            SetCurrentIndex(index);
          }}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: SCREEN_WIDTH * 0.04,
              margin: 10,
            }}>
            <Image
              style={{
                height: SCREEN_HEIGHT * 0.1,
                width: SCREEN_WIDTH * 0.2,
                borderRadius: 2,
              }}
              source={{uri: item?.artwork}}
            />
            <View style={{gap: 2, paddingTop: SCREEN_HEIGHT * 0.01}}>
              <Text style={{color: colors.background_theme1}}>
                {item?.title}
              </Text>
              <Text style={{color: colors.background_theme1}}>
                {item?.artist}
              </Text>
            </View>
            {index == CurrentIndex && isPlaying && (
              <View
                style={{
                  alignItems: 'center',
                  marginLeft: SCREEN_WIDTH * 0.02,
                  marginTop: SCREEN_HEIGHT * 0.02,
                }}>
                <Image
                  style={{
                    tintColor: colors.white_color,
                    height: SCREEN_HEIGHT * 0.03,
                    width: SCREEN_WIDTH * 0.06,
                  }}
                  source={require('../Assets/Images/playing.png')}
                />
              </View>
            )}
          </View>

          <TouchableOpacity
            style={{
              top: SCREEN_HEIGHT * 0.02,
              right: SCREEN_WIDTH * 0.035,
            }}>
            <Entypo name="dots-three-horizontal" color={'white'} size={20} />
          </TouchableOpacity>
        </TouchableOpacity>
      );
    };
    return (
      <View>
        <FlatList
          data={songsList}
          renderItem={renderItem}
          contentContainerStyle={{paddingVertical: 20}}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
  function BottomPlayer() {
    return (
      <TouchableOpacity
        onPress={() => {
          SetIsvisble(true);
        }}
        style={{
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT * 0.1,
          backgroundColor: colors.background_theme2,
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: SCREEN_WIDTH * 0.035,
          paddingVertical: SCREEN_HEIGHT * 0.02,
        }}>
        <View style={{flexDirection: 'row', gap: SCREEN_WIDTH * 0.04}}>
          <Image
            style={{
              height: SCREEN_HEIGHT * 0.08,
              width: SCREEN_WIDTH * 0.16,
              borderRadius: 5,
            }}
            source={{uri: songsList[CurrentIndex].artwork}}
          />
          <View style={{gap: 4, paddingTop: SCREEN_HEIGHT * 0.01}}>
            <Text
              style={{
                color: colors.white_color,
                fontSize: 15,
                fontWeight: '500',
              }}>
              {songsList[CurrentIndex]?.title}
            </Text>
            <Text style={{color: colors.white_color, fontSize: 12}}>
              {songsList[CurrentIndex]?.artist}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={handlePlayPause}>
          {isPlaying ? (
            <AntDesign name="pause" size={35} color={'white'} />
          ) : (
            <Entypo name="controller-play" size={45} color={'white'} />
          )}
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
  function Modalmusic() {
    return (
      <View>
        <MyMusicModal
          songsList={songsList}
          isPlaying={isPlaying}
          Progress={Progress}
          isVisble={isVisble}
          CurrentIndex={CurrentIndex}
          setIsPlaying={setIsPlaying}
          onClose={() => {
            SetIsvisble(false);
          }}
        />
      </View>
    );
  }
};

export default Home;

const styles = StyleSheet.create({});
