import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { stylesAcordion } from "../../../styles/horario/horario.styles";

export default function AccordionHorario({ data, color }) {
  const { dia, materias } = data;

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
      {materias.length > 0 ? (
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
            <Text style={stylesAcordion.title}>{data.dia}</Text>
            <Chevron progress={progress} />
          </Pressable>
          <Animated.View style={heightAnimationStyle}>
            <Animated.View
              ref={listRef}
              style={stylesAcordion.contentContainer}
            >
              {materias.map((materia, index) => (
                <View key={index}>
                  <View
                    style={[
                      stylesAcordion.content,
                      {
                        backgroundColor: color
                          ? index % 2 == 0
                            ? "#EEE"
                            : "#FFF"
                          : index % 2 == 0
                            ? "#FFF"
                            : "#EEE",  
                      },
                    ]}
                  >
                    <View style={stylesAcordion.contentTop}>
                      <Text style={[stylesAcordion.textContentTop]}>
                        {materia.MATERIA}
                      </Text>
                      <Text
                        style={[
                          stylesAcordion.textContentTop,
                          { fontWeight: "500" },
                        ]}
                      >
                        {materia[dia]}
                      </Text>
                    </View>
                    <View style={stylesAcordion.contentBottom}>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={stylesAcordion.textContentBottom}
                      >
                        {materia.NOMBRE}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </Animated.View>
          </Animated.View>
        </View>
      ) : null}
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
        source={require("../../../../assets/img/chevron.png")}
      />
    </Animated.View>
  );
};
