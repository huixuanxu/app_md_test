import React from 'react';
import { View, Text,Platform } from 'react-native';
import { Center, HStack, ScrollView, Box, Heading, Image, Button, ButtonText, Pressable  } from "@gluestack-ui/themed";
import style from "./style";

const MerchandiseScreen = () => {
    return(
     <ScrollView>
        <Box style={ style.ContainerStyle} >
            <Text  style={ style.headerTitleStyle} > Merchandise01</Text>
            <Center>
                <Pressable
                    // onPress={(/*() => { navigation.navigate('Detail', brand) }*/)}
                >
                  <Image
                    style={style.imageStyle}
                    source={require("../../images/xiao.jpg")}
                  />
                </Pressable>
            </Center>
        </Box>

        <Box style={ style.ContainerStyle} >
            <Text  style={ style.headerTitleStyle} > Merchandise02</Text>
            <Center>
                <Pressable
                    // onPress={/*() => { navigation.navigate('Detail', book) }*/}
                >
                  <Image
                    style={style.imageStyle}
                    source={require("../../images/kazuha.jpg")}
                  />
                </Pressable>
            </Center>
        </Box>

        <Box style={ style.ContainerStyle} >
            <Text  style={ style.headerTitleStyle} > Merchandise03</Text>
            <Center>
                <Pressable
                    // onPress={/*() => { navigation.navigate('Detail', book) }*/}
                >
                  <Image
                    style={style.imageStyle}
                    source={require("../../images/xiao02.jpg")}
                  />
                </Pressable>
            </Center>
        </Box>

        <Box style={ style.ContainerStyle} >
            <Text  style={ style.headerTitleStyle} > Merchandise04</Text>
            <Center>
                <Pressable
                    // onPress={/*() => { navigation.navigate('Detail', book) }*/}
                >
                  <Image
                    style={style.imageStyle}
                    source={require("../../images/xiao01.jpg")}
                  />
                </Pressable>
            </Center>
        </Box>

       
     </ScrollView>
    );   

}

export default MerchandiseScreen;