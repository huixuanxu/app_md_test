import React from 'react';
import { View, Text, Platform } from 'react-native';
import { Box, Image, Pressable,HStack, Button, ButtonText} from '@gluestack-ui/themed';
import style from "./style";

const MyBookScreen = () => {
    return (
        <View>
             <View >
                <HStack>
                    <HStack style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                     <Button style={ style.sectionButtonstyle} onPress={() => { navigation.navigate('Detail', book) }}>
                      <ButtonText style={{ fontSize: 15 }}>EYE1</ButtonText>
                     </Button>
                    
                     <Button style={ style.sectionButtonstyle} onPress={() => { navigation.navigate('Detail', book) }}>
                      <ButtonText style={{ fontSize: 15 }}>EYE1</ButtonText>
                     </Button>

                     <Button style={ style.sectionButtonstyle} onPress={() => { navigation.navigate('Detail', book) }}>
                      <ButtonText style={{ fontSize: 15 }}>EYE1</ButtonText>
                     </Button>
                    </HStack>
                </HStack>

            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           
                <Text style={{ fontSize: 20 }}>
                My books
                </Text>
            </View>

        </View>
        
    );
}

export default MyBookScreen;