import {
  View,
  Text,
  Animated,
  PanResponder,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import TinderCard from './TinderCard';

const TinderSwipeDemo = () => {
  const [data, setData] = useState([
    {image: require('./images/hulk.webp'), id: 1, title: 'Hulk'},
    {image: require('./images/ironman.webp'), id: 2, title: 'Ironman'},
    {image: require('./images/thor.jpeg'), id: 3, title: 'Thor'},
    {image: require('./images/superman.webp'), id: 4, title: 'Superman'},
    {image: require('./images/groot.webp'), id: 5, title: 'Groot'},
    {
      image: require('./images/blackpanther.webp'),
      id: 6,
      title: 'Black Panther',
    }
  ]);
  useEffect(() => {
    if (!data.length) {
      setData([
        {image: require('./images/hulk.webp'), id: 1, title: 'Hulk'},
        {image: require('./images/ironman.webp'), id: 2, title: 'Ironman'},
        {image: require('./images/thor.jpeg'), id: 3, title: 'Thor'},
        {image: require('./images/superman.webp'), id: 4, title: 'Superman'},
        {image: require('./images/groot.webp'), id: 5, title: 'Groot'},
        {
          image: require('./images/blackpanther.webp'),
          id: 6,
          title: 'Black Panther',
        }
      ]);
    }
  }, [data]);
  const swipe = useRef(new Animated.ValueXY()).current;
  const rotate = useRef(new Animated.Value(0)).current;

  const panResponser = PanResponder.create({
    // onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (_, gestureState) => {
      // Allow PanResponder only if horizontal movement is larger than vertical
      if( (Math.abs(gestureState.dx) > Math.abs(gestureState.dy * 3) ) &&(Math.abs(gestureState.vx) > Math.abs(gestureState.vy * 3) )) {
        return true
      } else {
        return false
      }
    },
    onPanResponderMove: (_, {dx, dy}) => {
      console.log('dx:' + dx + ' dy:' + dy);
      swipe.setValue({x: dx, y: 0});
    },

    onPanResponderRelease: (_, {dx, dy}) => {
      console.log('released:' + 'dx:' + dx + ' dy:' + dy);
      let direction = Math.sign(dx);
      let isActionActive = Math.abs(dx) > 200;
      if (isActionActive) {
        Animated.timing(swipe, {
          toValue: {x: 500 * dx, y: dy},
          useNativeDriver: true,
          duration: 500,
        }).start(removeCard);
      } else {
        Animated.spring(swipe, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
    },
  });
  const removeCard = useCallback(() => {
    setData(prepState => prepState.slice(1));
    swipe.setValue({x: 0, y: 0});
  }, [swipe]);

   
  return (
    <>
      {data
        .map((item, index) => {
          let isFirst = index === 0;
          let dragHanlders = isFirst ? panResponser.panHandlers : {};
          return (
            <TinderCard
              item={item}
              rotate={rotate}
              isFirst={isFirst}
              swipe={swipe}
              {...dragHanlders}
            />
          );
        })
        .reverse()}
    </>
  );
};

export default TinderSwipeDemo;
