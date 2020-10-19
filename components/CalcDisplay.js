import React from "react";
import { StyleSheet, View, Text } from "react-native";

const CalcDisplay = ({ display = "" }) => {
 return (
  <View style={styles.container}>
   <Text style={styles.display}>{display}</Text>
  </View>
 );
};

const styles = StyleSheet.create({
 container: {padding:20,},
 display: {fontSize:70,color:"white",textAlign:"right",},
});

export default CalcDisplay;
