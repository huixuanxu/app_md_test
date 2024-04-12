import React, {useRef} from "react";
import { ScrollView, Text, FlatList,View, StyleSheet,ImageBackground, Animated, useWindowDimensions, } from "react-native";
import section from "../../json/brand.json";
import BrandDetail from "../BrandDetail";
import styles from "./style";


const BrandList = ({ navigation }) => {
    return (
        <View style={styles.section}>
            
            <Text style={styles.sectionHeader}>
                {section[0].title}
            </Text>
            <FlatList
                horizontal={true}
                data={section[0].data}
                renderItem={({ item }) => <BrandDetail sign={item} navigation={navigation} />}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16, paddingLeft: 0 }}
                keyExtractor={item => item.title}
            />
            <Text style={styles.sectionHeader}>
                {section[1].title}
            </Text>
            <FlatList
                horizontal={true}
                data={section[1].data}
                renderItem={({ item }) => <BrandDetail sign={item} navigation={navigation} />}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16, paddingLeft: 0 }}
                keyExtractor={item => item.title}
            />
        </View>
    );
};

export default BrandList;