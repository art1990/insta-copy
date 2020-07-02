// react
import React from 'react';
import {StyleSheet, View} from 'react-native';
// video
import Video from 'react-native-video';
// assets
import Styles from 'assets/styles/styles';

const VideoView: React.FC<{media_url: string}> = ({media_url}) => {
  return (
    <View>
      <Video
        source={{uri: media_url}}
        style={[Styles.fullScreen, styles.container]}
        paused={false}
        repeat={true}
        resizeMode="cover"
        volume={0}
      />
    </View>
  );
};

export default VideoView;

const styles = StyleSheet.create({
  container: {height: '100%'},
});
