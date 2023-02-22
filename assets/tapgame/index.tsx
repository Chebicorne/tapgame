import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomText from '../components/CustomText';

import { useState, useEffect } from 'react';
import Countdown from './CountDown';
export default function HomePage() {
    const [gameStart, setGameStart] = useState(false)
    const [gameEnd, setGameEnd] = useState(false)
    const [player1Win, setPlayer1Win] = useState(false)
    const [upHeight, setUpHeight] = useState(50)
    const [downHeight, setDownHeight] = useState(50)
    const [gameTimer, setGameTimer] = useState(0)
    const checkWin = () => {
        if (upHeight == 0 || downHeight == 0) {
            if (upHeight == 0) {
                setPlayer1Win(true);
            } else {
                setPlayer1Win(false);
            }
            setGameEnd(true)
        }
    }

    const tap = (side: Boolean) => {
        if (gameStart) {
            if (!side) {
                setUpHeight(upHeight + 5);
                setDownHeight(downHeight - 5);
            }
            else {
                setDownHeight(downHeight + 5);
                setUpHeight(upHeight - 5);
            }
            checkWin()
        }
    }

    if (gameEnd) {
        return (
            <View style={styles.interactiveSide}>
                <LinearGradient
                    colors={['#FFDB01', '#FF9B1F']}
                    style={[styles.side2, { transform: [{ rotate: '180deg' }], }]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    {player1Win ? <CustomText text="T'as gagné mon reuf" /> : <CustomText text="T'as perdu mon reuf" />}
                </LinearGradient>

                <LinearGradient
                    colors={['#FE10D8', '#FD07F6']}
                    style={styles.side2}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    {player1Win ? <CustomText text="T'as perdu mon reuf" /> : <CustomText text="T'as gagné mon reuf" />}

                </LinearGradient>
            </View>
        )
    } else {
        return (
            <View style={styles.view}>
                <View style={styles.interactiveSide}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => { tap(true) }} style={[styles.button, styles.reverse]}>
                        <Countdown duration={3} onFinish={() => { setGameStart(true) }} />
                        {gameStart ?
                            <CustomText text='TAP' font={true} style={styles.text}></CustomText>
                            : null}
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => { tap(false) }} style={[styles.button]}>
                        <Countdown duration={3} onFinish={() => { setGameStart(true) }} />
                        {gameStart ?
                            <CustomText text='TAP' font={true} style={styles.text}></CustomText>
                            : null}
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                    <LinearGradient
                        colors={['#FFDB01', '#FF9B1F']}
                        style={[{ height: downHeight + '%' }]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                    </LinearGradient>
                    <LinearGradient
                        colors={['#FE10D8', '#FD07F6']}
                        style={[{ height: upHeight + '%' }]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                    </LinearGradient>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    interactiveSide: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
    },
    full: {
        height: '100%'
    },
    view: {
        flex: 1,
    },
    reverse: {
        transform: [{ rotate: '180deg' }],
    },
    button: {
        borderTopColor: '#FFF',
        borderTopWidth: 1,
        flex: 1,
        zIndex: 99,
        alignItems: 'center',
        justifyContent: 'center',
    },
    side: {
        height: "50%"
    },
    side2: {
        height: "50%",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 50,
        color: "white",
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 10,
        shadowOpacity: 0,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
    }
});