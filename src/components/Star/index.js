import React from "react";
import { View, Image } from "react-native";
import styles from "./style";

const Star = ({ stars }) => {
    let starlist = [];

    for (let i = 1; i <= 5; i++) {
        if (stars >= i) {
            starlist.push(<Image source={{ uri: 'https://github.com/dknyhsu1166/app_wk3/blob/main/images/icon_star1.png?raw=true' }} style={styles.stars} key={i} />)
        } else {
            starlist.push(<Image source={{
                uri: 'https://github.com/dknyhsu1166/app_wk3/blob/main/images/icon_star.png?raw=true' }} style={styles.stars} key={i} />)
        }
    }

    return (
        <View style={styles.starlist}>
            {starlist}
        </View>
    );
};

export default Star;