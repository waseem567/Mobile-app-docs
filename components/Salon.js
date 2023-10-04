import restaurant from "../assets/wp1874196.jpg";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import MapButton from "./MapButton";
import { useNavigation } from "@react-navigation/native";

function Salon({ item }) {
	const logo = item.icon;

	return (
		<View
			style={{
				backgroundColor: "white",
				width: "90%",
				alignSelf: "center",
				marginTop: 20,
				borderRadius: 10,
				shadowColor: "rgba(46, 229, 157, 0.4)",
				shadowOpacity: 1.5,
				elevation: 8,
				shadowRadius: 20,
				shadowOffset: { width: 1, height: 13 },
			}}
		>
			<Text
				style={{
					fontWeight: "600",
					padding: 10,
					borderBottomWidth: 2,
					borderBottomColor: "#F1EFEF",
				}}
			>
				{item.name}
			</Text>
			<Image
				style={{ width: "auto", height: 180 }}
				source={{ uri: logo }}
			></Image>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					borderBottomWidth: 2,
					borderBottomColor: "#F1EFEF",
				}}
			>
				<Text style={{ padding: 10, fontWeight: "600" }}>
					Rating : {item.rating}
				</Text>
				<Text style={{ padding: 10, fontWeight: "600" }}>
					Status : <Text style={{ color: "green" }}>Open</Text>
				</Text>
			</View>
			<View style={{ paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>
				<Text>{item.vicinity}</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					padding: 10,
				}}
			>
				<MapButton
					location={item.geometry.location}
					name={item.name}
				></MapButton>
			</View>
		</View>
	);
}

export default Salon;
