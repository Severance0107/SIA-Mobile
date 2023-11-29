import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import Animated, { Extrapolate, interpolate, measure, runOnUI, useAnimatedRef, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from "react-native-reanimated";
import { stylesAcordion } from "../styles/general.styles";

export default function Accordion({title, children, color}) {

  const listRef = useAnimatedRef();
  const heightValue = useSharedValue(0);
  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value ? withTiming(1) : withTiming(0)
  );
  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: interpolate(
      progress.value,
      [0, 1],
      [0, heightValue.value],
      Extrapolate.CLAMP
    ),
  }));

  return (
    <>
      <View
        style={[
          stylesAcordion.container,
          { backgroundColor: color ? "#FFF" : "#EEE" },
        ]}
      >
        <Pressable
          style={stylesAcordion.tittleContainer}
          onPress={() => {
            if (heightValue.value === 0) {
              runOnUI(() => {
                "worklet";
                heightValue.value = measure(listRef).height;
              })();
            }
            open.value = !open.value;
          }}
        >
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={stylesAcordion.title}
          >
            {title}
          </Text>
          <Chevron progress={progress} />
        </Pressable>
        <Animated.View style={heightAnimationStyle}>
          <Animated.View
            ref={listRef}
            style={[
              stylesAcordion.contentContainer,
              { backgroundColor: !color ? "#FFF" : "#EEE" },
            ]}
          >
            <View style={stylesAcordion.contentAcordion}>
              {
                children
              }
            </View>
          </Animated.View>
        </Animated.View>
      </View>
    </>
  );
}

const Chevron = ({ progress }) => {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${progress.value * -180}deg` }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Image
        style={stylesAcordion.chevronImage}
        source={require("../../assets/img/chevron.png")}
      />
    </Animated.View>
  );
};
