import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const AppTextInput = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  onChange, // Explicitly extract onChange to prevent conflicts - DO NOT pass to TextInput
  ...otherProps
}) => {
  // Ensure onChangeText receives a string, not an event
  const handleChangeText = (text) => {
    if (onChangeText && typeof text === "string") {
      onChangeText(text);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={handleChangeText}
        // Explicitly exclude onChange to prevent conflicts
        {...otherProps}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEEEEE",
    width: "100%",
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 8,
    marginBottom: 20,
  },
});
