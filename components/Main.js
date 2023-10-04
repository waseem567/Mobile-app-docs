import react from "react";
import { View, StyleSheet } from "react-native";
import Nearme from "./Nearme";

const Main = () => {
	return (
		<View style={styles.wrapper}>
			<Nearme />
		</View>
	);
};
const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: "#F1EFEF",
		color: "black",
	},
	text: {
		backgroundColor: "#8b0000",
		borderRadius: 10,
	},
});

export default Main;
