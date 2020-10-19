import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const CalcButton = ({
 onPress = function () {},
 tittle = "",
 color = "white",
 backgroundColor = "black",
 style = {},
}) => {
 let bc = backgroundColor;
 return (
  
   <TouchableOpacity  onPress={onPress} style={[styles.container,{backgroundColor:backgroundColor},{...style}]}>
    <Text style={[styles.text,{color:color}]}>{tittle}</Text>
   </TouchableOpacity>
  
 );
};

const styles = StyleSheet.create({
 container: {
  alignItems: "center",
  justifyContent: "center",
  width: 80,
  height: 80,
  borderRadius: 40,
  margin:5,
 },
 text: { fontSize: 30, fontWeight: "bold" },
});

export default CalcButton;
