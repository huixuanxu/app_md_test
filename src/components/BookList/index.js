import React, {useRef} from "react";
import { ScrollView, Text, FlatList,View, StyleSheet,ImageBackground, Animated, useWindowDimensions, } from "react-native";
import sections from "../../json/book.json";
import BookDetail from "../BookDetail";
import styles from "./style";

// const images = new Array(6).fill(
//     'https://images.unsplash.com/photo-1556740749-887f6717d7e4',
//   );

const BookList = ({ navigation }) => {

    // const scrollX = useRef(new Animated.Value(0)).current;

    // const {width: windowWidth} = useWindowDimensions();

    return (
        <View style={styles.section}>
            <Text style={styles.sectionHeader}>
                {sections[0].title}
            </Text>
            <FlatList
                horizontal={true}
                data={sections[0].data}
                renderItem={({ item }) => <BookDetail book={item} navigation={navigation} />}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16, paddingLeft: 0 }}
                keyExtractor={item => item.title}
            />
            <Text style={styles.sectionHeader}>
                {sections[1].title}
            </Text>
            <FlatList
                horizontal={true}
                data={sections[1].data}
                renderItem={({ item }) => <BookDetail book={item} navigation={navigation} />}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16, paddingLeft: 0 }}
                keyExtractor={item => item.title}
            />
        </View>
    );
};

export default BookList;