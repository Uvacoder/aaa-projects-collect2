import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import giveClssesBgImage from "../../assets/images/give-classes-background.png";
import styles from "./styles";

const GiveClasses: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigationLandingPage() {
    navigation.navigate("Landing");
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClssesBgImage}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Text>
      </ImageBackground>

      <RectButton style={styles.okButton} onPress={handleNavigationLandingPage}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
};

export default GiveClasses;
