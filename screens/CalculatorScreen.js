require("./../lib/swisscalc.lib.format.js");
require("./../lib/swisscalc.lib.operator.js");
require("./../lib/swisscalc.lib.operatorCache.js");
require("./../lib/swisscalc.lib.shuntingYard.js");
require("./../lib/swisscalc.display.numericDisplay");
require("./../lib/swisscalc.display.memoryDisplay");
require("./../lib/swisscalc.calc.calculator.js");

import React, { useState } from "react";
import { View, Text, StyleSheet, PanResponder } from "react-native";
import { CalcButton, CalcDisplay } from "../components/Index.js";

//CALCULATOR LIBRARY
//Iniatialize Calculator
const oc = global.swisscalc.lib.operatorCache;
const calc = new global.swisscalc.calc.calculator();

//COMPONENT
const CalculatorScreen = () => {

 //STATES
 //state related with the actual display
 const [display, setDisplay] = useState("0");

 //HANDLERS
 //handler related when you press a button
 const handleOnDigitPress = (digit) => {
  calc.addDigit(digit);
  setDisplay(calc.getMainDisplay());
 };

 //handler when you press clear button
 const handleClearPress = () => {
  calc.clear();
  setDisplay(calc.getMainDisplay());
 };
 //handler when you press PlusMinus button
 const handleOnPlusMinusPress = () => {
  calc.negate();
  setDisplay(calc.getMainDisplay());
 };
 //handler when you press a BinaryOperator Button
 const handleOnBinaryOperatorPress = (operator) => {
  calc.addBinaryOperator(operator);
 };

 //handler when you press equals operatos
 const handleOnEqualsPress = () => {
  calc.equalsPressed();
  setDisplay(calc.getMainDisplay());
 };
 //handler when you press percent operator
 const handleUnaryOperatorPress = (operator) => {
  calc.addUnaryOperator(operator);
  setDisplay(calc.getMainDisplay());
 };
 //handler when you press the backspace
 const handlerOnBackspacePress = () => {
  calc.backspace();
  setDisplay(calc.getMainDisplay());
 };

 //Initialize PanResponder..
 const panResponder = PanResponder.create({
  onStartShouldSetPanResponder: (evt, gestureState) => true,
  onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
  onMoveShouldSetPanResponder: (evt, gestureState) => true,
  onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
  onPanResponderRelease: (evt, gestureState) => {
   if (Math.abs(gestureState.dx) >= 50) {
    handlerOnBackspacePress();
   }
  },
 });

 //RETURN
 return (
  <View style={styles.container}>
   <View style={styles.displayContainer} {...panResponder.panHandlers}>
    <CalcDisplay display={display} />
   </View>

   <View style={styles.buttonContainer}>
    {/**FIRST ROW */}
    <View style={styles.buttonRow}>
     <CalcButton
      onPress={() => handleClearPress()}
      tittle="C"
      color="white"
      backgroundColor="#DCC894"
     />
     <CalcButton
      onPress={() => handleOnPlusMinusPress()}
      tittle="+/-"
      color="white"
      backgroundColor="#DCC894"
     />
     <CalcButton
      onPress={() => handleUnaryOperatorPress(oc.PercentOperator)}
      tittle="%"
      color="white"
      backgroundColor="#DCC894"
     />
     <CalcButton
      onPress={() => handleOnBinaryOperatorPress(oc.DivisionOperator)}
      tittle="/"
      color="white"
      backgroundColor="#DCA394"
     />
    </View>

    {/**SECOND ROW */}
    <View style={styles.buttonRow}>
     <CalcButton
      onPress={() => handleOnDigitPress("7")}
      tittle="7"
      color="white"
      backgroundColor="#687D88"
     />
     <CalcButton
      onPress={() => handleOnDigitPress("8")}
      tittle="8"
      color="white"
      backgroundColor="#687D88"
     />
     <CalcButton
      onPress={() => handleOnDigitPress("9")}
      tittle="9"
      color="white"
      backgroundColor="#687D88"
     />
     <CalcButton
      onPress={() => handleOnBinaryOperatorPress(oc.MultiplicationOperator)}
      tittle="X"
      color="white"
      backgroundColor="#DCA394"
     />
    </View>

    {/**THIRD ROW */}
    <View style={styles.buttonRow}>
     <CalcButton
      onPress={() => handleOnDigitPress("4")}
      tittle="4"
      color="white"
      backgroundColor="#687D88"
     />
     <CalcButton
      onPress={() => handleOnDigitPress("5")}
      tittle="5"
      color="white"
      backgroundColor="#687D88"
     />
     <CalcButton
      onPress={() => handleOnDigitPress("6")}
      tittle="6"
      color="white"
      backgroundColor="#687D88"
     />
     <CalcButton
      onPress={() => handleOnBinaryOperatorPress(oc.SubtractionOperator)}
      tittle="-"
      color="white"
      backgroundColor="#DCA394"
     />
    </View>

    {/**FOURTH ROW */}
    <View style={styles.buttonRow}>
     <CalcButton
      onPress={() => handleOnDigitPress("1")}
      tittle="1"
      color="white"
      backgroundColor="#687D88"
     />
     <CalcButton
      onPress={() => handleOnDigitPress("2")}
      tittle="2"
      color="white"
      backgroundColor="#687D88"
     />
     <CalcButton
      onPress={() => handleOnDigitPress("3")}
      tittle="3"
      color="white"
      backgroundColor="#687D88"
     />
     <CalcButton
      onPress={() => handleOnBinaryOperatorPress(oc.AdditionOperator)}
      tittle="+"
      color="white"
      backgroundColor="#DCA394"
     />
    </View>

    {/**FIFTH ROW */}
    <View style={styles.buttonRow}>
     <CalcButton
      onPress={() => handleOnDigitPress("0")}
      tittle="0"
      color="white"
      backgroundColor="#687D88"
      style={{ flex: 2 }}
     />
     <CalcButton
      onPress={() => handleOnDigitPress(".")}
      tittle="."
      color="white"
      backgroundColor="#687D88"
     />
     <CalcButton
      onPress={() => handleOnEqualsPress()}
      tittle="="
      color="white"
      backgroundColor="#DCA394"
     />
    </View>
   </View>
  </View>
 );
};

const styles = StyleSheet.create({
 container: { flex: 1, backgroundColor: "black" },
 buttonRow: { flexDirection: "row", justifyContent: "space-between" },
 displayContainer: { flex: 1, justifyContent: "flex-end" },
 buttonContainer: { paddingBottom: 20 },
});
export default CalculatorScreen;
