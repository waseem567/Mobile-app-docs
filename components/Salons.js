import React from "react";
import { ScrollView, FlatList, View } from "react-native";
import Salon from "./Salon";
import DATA_SET from "./data/SalonsDataset";

function Salons() {
	return (
		<View>
			<FlatList data={DATA_SET} renderItem={Salon} />
		</View>
	);
}

export default Salons;
