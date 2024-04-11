import React from 'react';
import { View, Text, Platform } from 'react-native';
import { Box, Image, Pressable,HStack, Button, ButtonText} from '@gluestack-ui/themed';
import styles from "./style";

const Brand01Screen = () => {
    return (
        <ScrollView>
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
     </ScrollView>
        
    );
}

export default Brand01Screen;