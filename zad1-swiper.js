import { useFonts } from "expo-font";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Swiper from "react-native-swiper";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  const { height, width } = useWindowDimensions();

  if (!fontsLoaded) return <AppLoading />;

  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        showsButtons={true}
        buttonWrapperStyle={styles.buttons}
        paginationStyle={{
          marginRight: width * 0.8,
          marginBottom: height * 0.01,
        }}
        activeDotColor="#8A56AC"
        dotColor="#998FA2"
        nextButton={
          <View
            style={{
              height: 60,
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              width: 60,
              backgroundColor: "#8A56AC",
            }}
          >
            <AntDesign name="arrowright" size={22} color="#fff" />
          </View>
        }
        prevButton={
          <View
            style={{
              height: 60,
              borderRadius: 30,
              alignItems: "center",
              marginHorizontal: 10,
              justifyContent: "center",
              width: 60,
              backgroundColor: "#8A56AC",
            }}
          >
            <AntDesign name="arrowleft" size={22} color="#fff" />
          </View>
        }
      >
        <View style={[styles.slide, height < 400 && styles.landscapeSlide]}>
          <View
            style={[styles.imageBox, height < 400 && styles.landscapeImage]}
          >
            <Image
              style={styles.image}
              source={{ uri: "https://i.pravatar.cc/650?img=9" }}
            />
          </View>
          <View
            style={[styles.content, height < 400 && styles.landscapeContent]}
          >
            <Text style={styles.contentTitle}>Welcome</Text>
            <Text style={styles.contentDesc}>
              When I was 5 years old, my mother always told me that happiness
              was the key to life. When i went to school, they asked mewhat I
              wanted to be when I grew up
            </Text>
          </View>
        </View>
        <View style={[styles.slide, height < 400 && styles.landscapeSlide]}>
          <View
            style={[styles.imageBox, height < 400 && styles.landscapeImage]}
          >
            <Image
              style={styles.image}
              source={{ uri: "https://i.pravatar.cc/650?img=16" }}
            />
          </View>
          <View
            style={[styles.content, height < 400 && styles.landscapeContent]}
          >
            <Text style={styles.contentTitle}>Welcome</Text>
            <Text style={styles.contentDesc}>
              When I was 5 years old, my mother always told me that happiness
              was the key to life. When i went to school, they asked mewhat I
              wanted to be when I grew up
            </Text>
          </View>
        </View>
      </Swiper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  slide: {
    padding: 20,
  },
  landscapeSlide: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  imageBox: {
    height: 400,
    elevation: 8,
    shadowColor: "#8A56AC",
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopEndRadius: 80,
    borderBottomLeftRadius: 80,
  },
  landscapeImage: {
    width: "50%",
    height: "90%",
    marginRight: 30,
    marginVertical: 20,
  },
  content: {
    marginTop: 40,
  },
  landscapeContent: {
    width: "50%",
  },
  contentTitle: {
    fontSize: 42,
    fontWeight: "700",
    marginBottom: 15,
    fontFamily: "Montserrat_700Bold",
  },
  contentDesc: {
    fontSize: 18,
    fontWeight: "300",
    color: "#878f99",
    fontFamily: "Montserrat_400Regular",
  },
  buttons: {
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    alignItems: "flex-end",
  },
});
