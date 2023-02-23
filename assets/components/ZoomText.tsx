import React, { useRef, useEffect } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import CustomText from '../components/CustomText';


export default function ZoomText(props: any) {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }, []);

  return (
    <View>
      <Animated.Text style={{
        transform: [
          { scale: scaleAnim },
          { rotate: '-5deg' }
        ]
      }}>
        <CustomText font={true} style={styles.sWord} text={props.text} />
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sWord: {
    position: "absolute",
    left: 40,
    fontSize: 90,
    color: "white",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 10,
    shadowOpacity: 0,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    transform: [{ rotate: '-5deg' }],
  }
}); 