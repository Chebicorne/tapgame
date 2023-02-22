import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, Easing, Linking } from 'react-native';
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import CustomText from './assets/components/CustomText';

export default function App({ navigation }: { navigation: any }) {
  const [scaleValue] = useState(new Animated.Value(1));
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.2,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])

    ).start();
  }, []);

  return (
    <LinearGradient
      colors={['#FFDB01', '#FD07F6']}
      style={styles.background}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={{ alignItems: "center" }}>
        <Image style={styles.logo} source={require('./assets/logoShotX.png')} />

        <Animated.Text style={{ transform: [{ scale: scaleValue }] }}>
          <CustomText
            text={"TAPGAME"}
            font={true}
            style={styles.text}
          />
        </Animated.Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.replace('TapGame')}
        activeOpacity={0.8}
        style={styles.container}>
        <Image style={styles.logo2} source={require('./assets/tapgame.png')} />

        <CustomText
          text={"LANCER UNE PARTIE"}
          font={true}
          style={styles.text2}
        />
      </TouchableOpacity>

      <View style={styles.links}>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.tiktok.com/@shotxlejeu")}>
          <Image style={styles.rs} source={require('./assets/followtiktok.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.tiktok.com/@shotxlejeu")}>
          <Image style={styles.rs} source={require('./assets/followinsta.png')} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    width: 317,
    height: 96,
  },
  logo2: {
    width: 239,
    height: 95,
    marginBottom: 28
  },
  text: {
    fontSize: 40,
    color: "white",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 10,
    shadowOpacity: 0,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  text2: {
    fontSize: 30,
    color: "white",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 10,
    shadowOpacity: 0,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    width: "100%",
    marginTop: 30,
    alignItems: "center",
    backgroundColor: "#310081",
    borderRadius: 25,
    padding: 20,
  },
  links: {
    alignItems: "center",
    marginBottom: 25
  },
  rs: {
    width: 341.6,
    height: 50.8,
    borderRadius: 15,
    marginBottom: 5
  }
});
