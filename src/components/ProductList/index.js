import React, {useRef} from "react";
import { ScrollView, Text, FlatList,View, StyleSheet,ImageBackground, Animated, useWindowDimensions, } from "react-native";
import sections from "../../json/set.json";
import ProductDetail from "../ProductDetail";
import styles from "./style";


const ProductList = ({navigation}) => {
   
    let listfirst=sections[0];
    let listsecond=sections[1];
    
    if (sections.number===1){
        listfirst=sections[0];
        listsecond=sections[1];
 
     }else if(sections.number===2){
        listfirst=sections[2];
        listsecond=sections[3];
     }else{
        listfirst=sections[4];
        listsecond=sections[5];
     }


    return (
        <View style={styles.section}>
           <View>
                    <Text style={styles.sectionHeader}>
                    {listfirst.title}
                    </Text>
                    <FlatList
                    horizontal={true}
                    data={listfirst.data}
                    renderItem={({ item }) => <ProductDetail set={item} navigation={navigation} />}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 16, paddingLeft: 0 }}
                    keyExtractor={item => item.title}
                    />

                </View>

                <View>
                   <Text style={styles.sectionHeader}>
                   {listsecond.title}
                    </Text>
                    <FlatList
                    horizontal={true}
                    data={listsecond.data}
                    renderItem={({ item }) => <ProductDetail set={item} navigation={navigation} />}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 16, paddingLeft: 0 }}
                    keyExtractor={item => item.title}
                    />

                </View>

        </View>
    );
};

export default ProductList;