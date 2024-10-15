import { Pressable, Text, StyleSheet } from "react-native";

const Button = () => {
  return (
    <Pressable style={styles.button}>
      <Text>Button</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {},
});
