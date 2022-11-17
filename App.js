import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import HomeView from "./views/HomeView";
import FeaturesView from "./views/FeaturesView";
import LibraryView from "./views/LibraryView";
import Icon from "./components/ui/Icon";
import { COLOR } from "./constants/colors";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Features"
          sceneContainerStyle={{
            backgroundColor: "#fff",
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = "home";
              } else if (route.name === "Library") {
                iconName = "library";
              } else if (route.name === "Features") {
                iconName = "map";
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
            headerShown: false,
            tabBarActiveTintColor: COLOR.primary,
            title: "",
            tabBarStyle: {
              borderTopWidth: 0,
            },
            // tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={HomeView} />
          <Tab.Screen name="Library" component={LibraryView} />
          <Tab.Screen
            name="Features"
            component={FeaturesView}
            options={{ tabBarBadge: 4 }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
