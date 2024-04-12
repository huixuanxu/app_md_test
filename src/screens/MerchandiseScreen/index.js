import React from 'react';
import { View, Text,Platform } from 'react-native';
import { Center, HStack, ScrollView, Box, Heading, Image, Button, ButtonText, Pressable  } from "@gluestack-ui/themed";

import BrandList from '../../components/BrandList';

const MerchandiseScreen = ({navigation}) => {
    return(
      <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <BrandList 
        navigation={navigation}
      />
    </ScrollView>
    
    );   

}

export default MerchandiseScreen;