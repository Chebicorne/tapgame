import { StyleSheet, Text, TextStyle } from 'react-native';
import { useFonts } from 'expo-font';

export default function CustomText({
        text,
        style,
        font = false
    }: {
        text: string,
        style?: TextStyle,
        font?: boolean,
    }) {
    const [fontsLoaded] = useFonts({
        JIMMYBOYZ: require('../fonts/JIMMYBOYZ.ttf'),
        Poppins: require('../fonts/Poppins-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null
    }
    return (
        <Text style={[style, font ? { fontFamily: 'JIMMYBOYZ' } : { fontFamily: 'Poppins' }]}>{text}</Text>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
