import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming, Easing } from "react-native-reanimated";

const MovingText = ({text, animatedTreshhold, style}) => {
    const translateX = useSharedValue(0)
    const shouldAnimate = text.length >= animatedTreshhold;
    const textWidth = text.length * 3;

    useEffect(() => {
        if(!shouldAnimate) return 

        translateX.value = withDelay(1000, withRepeat(
            withTiming(
                -textWidth, {
                    duration: 5000,
                    easing: Easing.linear,
                }
            ),
            -1,
            true
        ))
    }, [translateX, text, animatedTreshhold, textWidth])

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{translateX: translateX.value}]
        }
    })

  return (
    <View>
        <Animated.Text numberOfLines={1} style={[animatedStyle, style, shouldAnimate && {width: 9999, paddingLeft: 16}]}>
            {text}
        </Animated.Text>
    </View>
  );
};

export default MovingText;

const styles = StyleSheet.create({});
