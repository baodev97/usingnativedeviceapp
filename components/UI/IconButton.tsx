import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

type IconButtonProps = {
  name: keyof typeof Ionicons.glyphMap;
  size: number;
  color: string | undefined;
  onPress: () => void;
};

function IconButton({ name, size, color, onPress }: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
}
export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
