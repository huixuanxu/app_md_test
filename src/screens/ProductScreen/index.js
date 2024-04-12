import React from 'react';
import { Linking } from 'react-native';
import { Center, HStack, ScrollView, Box, Text, Heading, Image, Button, ButtonText } from "@gluestack-ui/themed";
import Starlist from "../../components/Star"
const ProductScreen = ({ route }) => {
    const { title, 
      author,
      star,
      image,
      
    } = route.params;
    return (
      <Center backgroundColor='#FFFFFF'>
        <ScrollView backgroundColor='#FFFFFF'>
          <Box backgroundColor='#FFFFFF'>
          <Center pl={5} pr={5}>
          <Image 
              style={{ width: "100%", height: 200, marginTop:10}}
              source={{uri:image}}
              alt='bookImage'
            />
  
            <Box bg="#fff">
              <Center>
                <Text fontSize={24} fontWeight='400' color='#131313' textAlign='center' lineHeight={28}>{title}</Text>
                <Text  fontSize={14} fontWeight='400' color='gray' textAlign='center' lineHeight={16}>
                  {author}
                </Text>
                <HStack mt={10} >
                   <Starlist star={star} size={20}/>
                    <Text fontSize={14} fontWeight='400' letterSpacing={1}  pl={20}
                    >{star}.0/5.0</Text>
                  </HStack>
     
  
             
               </Center>
            </Box>
          </Center>
  
          </Box>
         
        </ScrollView>      
      </Center>
  
    );
  }
  
  export default ProductScreen;