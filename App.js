import React, { Component } from "react";

import {
  View,
  StyleSheet,
  Button,
  ScrollView,
  FlatList,
  Alert,
  Text,
  Image,
  Linking,
} from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import t from "tcomb-form-native";

const Form = t.form.Form;
.
const User = t.struct({
  CRIM: t.String,
  ZIN: t.String,
  INDUS: t.String,
  CHAS: t.String,
  NOX: t.String,
  RM: t.String,
  AGE: t.String,
  DIS: t.String,
  RAD: t.String,
  TAX: t.String,
  PTRATIO: t.String,
  B: t.String,
  LSTAT: t.String,
  terms: t.Boolean,
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10,
    },
  },
  controlLabel: {
    normal: {
      color: "blue",
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600",
    },
    // the style applied when a validation error occours
    error: {
      color: "red",
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600",
    },
  },
};

const options = {
  fields: {
    CRIM: {
      error:
        "Choose something you use on a dozen other sites or something you won't remember",
    },
    ZIN: {
      error:
        "Choose something you use on a dozen other sites or something you won't remember",
    },
    INDUS: {
      error:
        "Choose something you use on a dozen other sites or something you won't remember",
    },
    CHAS: {
      error:
        "Choose something you use on a dozen other sites or something you won't remember",
    },
    NOX: {
      error:
        "Choose something you use on a dozen other sites or something you won't remember",
    },
    RM: {
      error:
        "Choose something you use on a dozen other sites or something you won't remember",
    },
    AGE: {
      error:
        "Choose something you use on a dozen other sites or something you won't remember",
    },
    RAD: {
      error:
        "Choose something you use on a dozen other sites or something you won't remember",
    },
    TAX: {
      error:
        "Choose something you use on a dozen other sites or something you won't remember",
    },
    B: {
      error:
        "Choose something you use on a dozen other sites or something you won't remember",
    },
    PTRATIO: {
      error:
        "Choose something you use on a dozen other sites or something you won't remember",
    },
    LSTAT: {
      error:
        "Choose something you use on a dozen other sites or something you won't remember",
    },
    terms: {
      label: "Ready to Go",
    },
  },
  stylesheet: formStyles,
};

class HomeScreen extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    var CRIM = value.CRIM;
    var ZIN = value.ZIN;
    var INDUS = value.INDUS;
    var CHAS = value.CHAS;
    var NOX = value.NOX;
    var RM = value.RM;
    var AGE = value.AGE;
    var DIS = value.DIS;
    var RAD = value.RAD;
    var TAX = value.TAX;
    var B = value.B;
    var PTRATIO = value.PTRATIO;
    var LSTAT = value.LSTAT;
    // console.log(CRIM);
    // console.log(ZIN);
    // console.log(INDUS);
    // console.log(CHAS);
    // console.log(NOX);
    // console.log(RM);
    // console.log(AGE);
    // console.log(DIS);
    // console.log(RAD);
    // console.log(TAX);
    // console.log(B);
    // console.log(PTRATIO);
    // console.log(LSTAT);
    axios
      .get(
        "https://housing-price-india.herokuapp.com/api?" +
          "crim=" +
          CRIM +
          "&" +
          "zin=" +
          ZIN +
          "&" +
          "indus=" +
          INDUS +
          "&" +
          "chas=" +
          CHAS +
          "&" +
          "nox=" +
          NOX +
          "&" +
          "rm=" +
          RM +
          "&" +
          "age=" +
          AGE +
          "&" +
          "dis=" +
          DIS +
          "&" +
          "rad=" +
          RAD +
          "&" +
          "tax=" +
          TAX +
          "&" +
          "ptratio=" +
          PTRATIO +
          "&" +
          "b=" +
          B +
          "&" +
          "lstat=" +
          LSTAT
      )
      .then((response) => {
        Alert.alert(
          "Your chances of getting a house is" +
            JSON.stringify(response.data.price) +
            " %"
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <Form ref={(c) => (this._form = c)} type={User} options={options} />
          <Button
            title="Get Data"
            onPress={this.handleSubmit}
            style={styles.cm}
          />
        </ScrollView>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.cont}>
        <Image source={require("./assets/trio.png")} style={styles.img} />
        <View style={styles.new}>
          <Text style={styles.te}>
            Established in 2017,Trio india is a Bengaluru based startup which
            aims to redifine the user experience in technology.This app is a
            product of that very trend. The prediction results comply with a
            larger dataset publicly availalable on kaggle .To Check for Housing
            predictions on web please visit{" "}
          </Text>
          <Text
            style={styles.TextStyle}
            onPress={() =>
              Linking.openURL("https://housing-price-india.herokuapp.com")
            }
          >
            here
          </Text>
        </View>
      </View>
    );
  }
}

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={"ios-home"} />
          </View>
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: "About Us",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={"ios-person"}
            />
          </View>
        ),
        activeColor: "#f60c0d",
        inactiveColor: "#f65a22",
        barStyle: { backgroundColor: "#f69b31" },
      },
    },
  },
  {
    initialRouteName: "Home",
    activeColor: "#f0edf6",
    inactiveColor: "#226557",
    barStyle: { backgroundColor: "#3BAD87" },
  }
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 10,
    padding: 20,
    marginBottom: 50,
    backgroundColor: "#ffffff",
    flexGrow: 1,
  },
  cm: {
    marginBottom: 50,
    marginTop: 20,
  },
  cont: {
    flex: 1,

    marginTop: 10,
    textAlign: "center",
  },
  te: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    fontFamily: "sans-serif-thin",
  },
  img: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 340,
    height: 180,
    marginBottom: 5,
    marginTop: 10,
  },
  TextStyle: {
    color: "#E91E63",
    textDecorationLine: "underline",
    fontStyle: "normal",
  },
  new: {
    height: 300,
    padding: 10,
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#ebebe0",
    borderRadius: 5,
    borderColor: "#ccccb3",
    borderWidth: 5,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default createAppContainer(TabNavigator);
