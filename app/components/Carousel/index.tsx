// react
import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
  Text,
  Animated,
} from 'react-native';
// components
import DarkBgContainer from '../DarkBgContainer';
// assets
import Styles from 'assets/styles/styles';
// colors
import {Colors} from 'assets/styles/constants';

const {width: windowWidth} = Dimensions.get('window');
const dotsSize = 6;

const Carousel: React.FC<{mediaList: string[]}> = ({mediaList}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const dotsContainerRef = useRef<{[key: string]: {}}>({});
  const dotsScrollRef = useRef<ScrollView>(null);

  const setSelected = (event: any): void => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    const index = Math.floor(contentOffset.x / viewSize.width);
    setSelectedIndex(index);
  };

  const imgLength = mediaList.length;

  const scrollTo = (index: number) => {
    const get = dotsContainerRef.current[`dots_${index}`];

    if (get) {
      const x = get.x - dotsSize * 6;
      return dotsScrollRef?.current && dotsScrollRef.current.scrollTo({x});
    }
  };

  useEffect(() => {
    scrollTo(selectedIndex);
  }, [selectedIndex]);

  return (
    <View style={[Styles.fullScreen, styles.container]}>
      <DarkBgContainer style={styles.pagesCountViewer}>
        <Text style={styles.countText}>{selectedIndex + 1}/</Text>
        <Text style={styles.countText}>{imgLength}</Text>
      </DarkBgContainer>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={setSelected}
        ref={scrollRef}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={1}>
        {mediaList.map((media) => (
          <Image
            style={styles.backgroundImage}
            source={{uri: media}}
            key={media}
          />
        ))}
      </ScrollView>
      <ScrollView
        ref={dotsScrollRef}
        style={styles.circleContainer}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.circleContentContainer}>
        {mediaList.map((media, i) => {
          const color = scrollX.interpolate({
            inputRange: [
              windowWidth * (i - 1),
              windowWidth * i,
              windowWidth * (i + 1),
            ],
            outputRange: [
              Colors.CARUSEL_DEFAULT,
              Colors.CARUSEL_ACTIVE,
              Colors.CARUSEL_DEFAULT,
            ],
            extrapolate: 'clamp',
          });
          const scale = scrollX.interpolate({
            inputRange: [
              windowWidth * (i - 2),
              windowWidth * i,
              windowWidth * (i + 2),
            ],
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              style={[
                styles.circle,
                {backgroundColor: color, transform: [{scale}]},
              ]}
              key={media}
              accessible={i === selectedIndex}
              onLayout={({
                nativeEvent: {
                  layout: {x, y},
                },
              }) => {
                dotsContainerRef.current[`dots_${i}`] = {x, y};
              }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {height: 300},
  pagesCountViewer: {position: 'absolute', top: 10, right: 10},
  countText: {color: Colors.WHITE},
  backgroundImage: {
    width: windowWidth,
  },
  circleContainer: {
    position: 'absolute',
    bottom: -25,
    alignSelf: 'center',
    height: 15,
    width: dotsSize * 11,
  },
  circleContentContainer: {alignItems: 'center'},
  circle: {
    width: dotsSize,
    height: dotsSize,
    borderRadius: dotsSize / 2,
    margin: 5,
    backgroundColor: Colors.CARUSEL_DEFAULT,
  },
});

export default Carousel;
