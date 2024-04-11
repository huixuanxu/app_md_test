import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import Starlist from "../Star"
import styles from "./style";

const BookDetail = ({ book, navigation }) => {
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={styles.cardContainerStyle}>
                <View style={styles.cardSectionStyle}>
                    <Pressable
                        onPress={() => { navigation.navigate('Detail', book) }}
                    >
                        <Image
                            style={styles.imageStyle}
                            source={{ uri: book.image }}
                        />
                    </Pressable>
                </View>
            </View>
            <View>
                {book.star ?
                    <View style={styles.homeStarList}>
                        <Starlist stars={book.stars} />
                    </View>
                    : null}
                <Text style={styles.headerTitleStyle}>{book.name}</Text>
                <Text style={styles.headerContentStyle}>{book.author}</Text>
            </View>
        </View>
    )
};

export default BookDetail;