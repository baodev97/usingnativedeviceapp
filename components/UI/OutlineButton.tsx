import { Colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

type OutlineButtonProps = {
  children: string;
  name: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string | undefined;
  onPress: () => void;
};

function OutlineButton({
  children,
  name,
  size,
  color,
  onPress,
}: OutlineButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.button]}
    >
      <Ionicons name={name} color={color} size={size} style={styles.icon} />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}
export default OutlineButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary500,
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: Colors.primary500,
  },
});
