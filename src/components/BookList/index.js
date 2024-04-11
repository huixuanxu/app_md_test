import React, {useRef} from "react";
import { ScrollView, Text, FlatList,View, StyleSheet,ImageBackground, Animated, useWindowDimensions, } from "react-native";
import sections from "../../json/main.json";
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
            
            {/* <View style={styles.scrollContainer}>
                <ScrollView
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    {
                    nativeEvent: {
                        contentOffset: {
                        x: scrollX,
                        },
                    },
                    },
                ])}
                scrollEventThrottle={1}>
                {images.map((image, imageIndex) => {
                    return (
                    <View style={{width: windowWidth, height: 250}} key={imageIndex}>
                        <ImageBackground source={{uri: image}} style={styles.card}>
                        <View style={styles.textContainer}>
                            <Text style={styles.infoText}>
                            {'Image - ' + imageIndex}
                            </Text>
                        </View>
                        </ImageBackground>
                    </View>
                    );
                })}
                </ScrollView>
                <View style={styles.indicatorContainer}>
                {images.map((image, imageIndex) => {
                    const width = scrollX.interpolate({
                    inputRange: [
                        windowWidth * (imageIndex - 1),
                        windowWidth * imageIndex,
                        windowWidth * (imageIndex + 1),
                    ],
                    outputRange: [8, 16, 8],
                    extrapolate: 'clamp',
                    });
                    return (
                    <Animated.View
                        key={imageIndex}
                        style={[styles.normalDot, {width}]}
                    />
                    );
                })}
                </View>
            </View> */}
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