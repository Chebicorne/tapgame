import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CustomText from '../components/CustomText';
const Countdown = ({ duration, onFinish }: { duration: any, onFinish: any }) => {
    const [count, setCount] = useState(duration);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        if (count === 0) {
            onFinish();
            setVisible(false);
            return;
        }
        const timer = setTimeout(() => {
            setCount(count - 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, [count]);

    if (!visible) {
        return null;
    }

    return (
        <View>
            <CustomText text={"TAP LE PLUS VITE POSSIBLE"} font={true} style={styles.rules} />
            {count > 0 ? (
                <CustomText text={count} font={true} style={styles.text} />
            ) : (
                <Text>GO</Text>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    text: {
        fontSize: 50,
        color: "white",
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 10,
        shadowOpacity: 0,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textAlign: 'center'
    },
    rules: {
        fontSize: 30,
        textAlign: "center",
        marginBottom: 30,
        color: "white",
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 10,
        shadowOpacity: 0,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
    }
});
export default Countdown;
