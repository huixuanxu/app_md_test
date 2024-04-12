import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import sections from "../../json/set.json"
import styles from "./style";

const ProductDetail = ({ set, navigation }) => {
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={styles.cardContainerStyle}>
                <View style={styles.cardSectionStyle}>
                    <Pressable
                        onPress={() => { navigation.navigate('Product', set) }}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={{ uri: set.image }}
                        />
                    </Pressable>
                </View>
            </View>
            <View>
                {/* {set.star ?
                    <View style={styles.homeStarList}>
                        <Starlist stars={set.stars} />
                    </View>
                    : null} */}
                <Text style={styles.headerTitleStyle}>{set.name}</Text>
                <Text style={styles.headerContentStyle}>{set.author}</Text>
            </View>
        </View>
    )
};

export default ProductDetail;