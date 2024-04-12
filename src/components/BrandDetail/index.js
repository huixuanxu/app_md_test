import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./style";


const BrandDetail = ({ sign, navigation }) => {
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={styles.cardContainerStyle}>
                
                    <Pressable
                        onPress={() => { navigation.navigate('Series', sign) }}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={{ uri:sign.image}}
                        />
                    </Pressable>
                
            </View>
        </View>
    )
};

export default BrandDetail;