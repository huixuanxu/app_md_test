import React from 'react';
import { View, Text, Platform, FlatList } from 'react-native';
import { Center, HStack, ScrollView, Box, Heading, Image, Button, ButtonText, Pressable  } from "@gluestack-ui/themed";
import style from "./style";

import BrandList from '../../components/BrandList';
import ProductList from '../../components/ProductList';

const SeriesScreen = ({navigation }) => {
  //  const{num} = route.params;
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
          <ProductList 
          // num={num}
          navigation={navigation}
          />
        </ScrollView>
      );
    };


export default SeriesScreen;