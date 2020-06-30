// react
import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
  Text,
} from 'react-native';
// assets
import Styles from 'assets/styles/styles';
// colors
import {Colors} from 'assets/styles/constants';

const Carousel: React.FC<{images: string[]}> = ({images}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollRef = useRef(null);

  const setSelected = (event: any): void => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    const index = Math.floor(contentOffset.x / viewSize.width);
    setSelectedIndex(index);
  };

  const isSmallCircle = (i: number, step: number = 2) =>
    (i - step >= selectedIndex && i === imgLength - 1) ||
    (i + step <= selectedIndex && i === 0);

  const isDisplayNone = (i: number, step: number = 2) =>
    i > step && i < imgLength - step;

  const isActive = (i: number) => i === selectedIndex;

  const imgLength = images.length;
  return (
    <View style={[Styles.fullScreen, styles.container]}>
      <View style={styles.pagesCountViewer}>
        <Text style={styles.countText}>{selectedIndex + 1}/</Text>
        <Text style={styles.countText}>{imgLength}</Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={setSelected}
        ref={scrollRef}>
        {images.map((image) => (
          <Image
            style={styles.backgroundImage}
            source={{uri: image}}
            key={image}
          />
        ))}
      </ScrollView>
      <View style={styles.circleDiv}>
        {images.map((image, i) => (
          <View
            style={[
              styles.circle,
              isDisplayNone(i) && styles.displayNone,
              isActive(i) && styles.circleActive,
              isSmallCircle(i) && styles.circleSmall,
            ]}
            key={image}
            accessible={i === selectedIndex}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {height: 300},
  pagesCountViewer: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    backgroundColor: Colors.MEDIA_META_BG,
    zIndex: 999,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  countText: {color: Colors.WHITE},

  backgroundImage: {
    width: Dimensions.get('window').width,
  },
  displayNone: {display: 'none'},
  circleDiv: {
    position: 'absolute',
    bottom: -25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 10,
  },
  circle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: Colors.CARUSEL_DEFAULT,
  },
  circleActive: {backgroundColor: Colors.CARUSEL_ACTIVE, display: 'flex'},
  circleSmall: {
    display: 'flex',
    width: 3,
    height: 3,
    borderRadius: 3,
    margin: 5,
    backgroundColor: Colors.CARUSEL_DEFAULT,
  },
});

export default Carousel;
