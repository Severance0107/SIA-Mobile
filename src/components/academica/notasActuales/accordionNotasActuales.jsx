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
import { stylesAcordion } from "../../../styles/academica/notasActuales.styles";
import RowNotas from "./rowNotas";
import ResultadoNotas from "./resultadoNotas";

export default function AccordionNotasActuales({ data, color }) {
  const {
    CODIGO,
    DEFINITIVA,
    EXAMEN,
    HABILITACION,
    NOMBRE,
    NOTA1,
    NOTA2,
    NOTA3,
    SETENTA,
  } = data;

  console.log(SETENTA);

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
            {NOMBRE}
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
              <RowNotas
                primero={{ label: "Nota 1", nota: NOTA1 }}
                segundo={{ label: "Nota 2", nota: NOTA2 }}
                tercero={{ label: "Nota 3", nota: NOTA3 }}
              />
              {/* Row de notas calculadas */}
              {EXAMEN !== null && (
                <RowNotas
                  primero={{ label: "Examen", nota: EXAMEN }}
                  segundo={{ label: "Definitiva", nota: DEFINITIVA }}
                  tercero={{ label: "Habilitación", nota: HABILITACION }}
                />
              )}
              {/* Calular examen */}
              {
                (SETENTA !== null) && <ResultadoNotas setenta={parseFloat(SETENTA)} />
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
        source={require("../../../../assets/img/chevron.png")}
      />
    </Animated.View>
  );
};
