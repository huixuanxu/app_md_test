import React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { Platform } from "react-native";
import { Box,Image, Text, Pressable,} from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import WishScreen from '../screens/WishScreen';
import MybookScreen from '../screens/MyBookScreen';
import MerchandiseScreen from '../screens/Merchandise';
import AccountScreen from '../screens/AccountScreen';
import SettingtScreen from '../screens/SettingScreen';
import NullScreen from '../screens/NullScreen';
import ActionButton from '../components/ActionButton';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: 45 , marginBottom:20}}>
        <Image
          height={60}
          width={60}
          source={require("../images/profile.png")}
          alt='AccountImage'
        />
        <Text style={{ fontWeight: '500', fontSize: 20, marginLeft: 16 }}>
          許宸瑋
        </Text>
      </View>
      <View style={{ backgroundColor: '#EDEDEF', height: 2 ,marginBottom:10}} />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        drawerStyle: { width: 250 },
        drawerActiveBackgroundColor: '#e5e5e5',
        drawerInactiveTintColor:'#666666',
        drawerActiveTintColor: '#6200EE',
        headerTitleStyle: {
          fontWeight: '400',
          fontSize: 20
        },
        drawerLabelStyle: { fontSize: 14, fontWeight: '400' },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      
      <Drawer.Screen
        name="MyTabs"
        component={MyTabs}
        options={{
          headerShown: false,
          title: "主頁",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={32} marginTop={5} paddingBottom={1} />
          ),
          drawerLabelStyle: {
            fontSize: 16, // 更改字體大小
          },
        }}
      />
      <Drawer.Screen
        name="AccountStack"
        component={AccountScreen}
        options={{
          //headerShown: false,
          title: "帳戶",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={32} marginTop={4} />
          ),
          drawerLabelStyle: {
            fontSize: 16, // 更改字體大小
          },
        }}
      />
      <Drawer.Screen
        name="SettingsStack"
        component={SettingtScreen}
        options={{
          //headerShown: false,
          title: "設定",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={32} marginTop={4} paddingBottom={3} />
          ),
          drawerLabelStyle: {
            fontSize: 16, // 更改字體大小
            paddingBottom:3,
          },
        }}
      />
    </Drawer.Navigator>
  );
}

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#6200EE',
        tabBarStyle: { height:Platform.OS === 'ios' ? 90 : 70, }
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "主頁",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={32} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 7,
          },
        }}
      />
      
      <Tab.Screen
        name="ActionButton"
        component={NullScreen}
        options={{
          tabBarButton: () => <ActionButton />,
        }}
      />
      
      <Tab.Screen
        name="Merchandise"
        component={Merchandise}
        options={{
          headerShown: false,
          title: "商品",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20,
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={28} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 7,
          },
        }}
      />
    </Tab.Navigator>
  );
}

const HomeStack = ({ navigation }) => {
  const [toggle, setToggle] = useState(true);
  const toggleFunction = () => {
    setToggle(!toggle);
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={24}
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 20 }}
            />
          ),
          headerTitle: () => (
            <Image
              source={require('../images/logo_black.png')}
              style={{ width: 140, height: 50 }}
              alt="logo pic"
              marginLeft={70}
              marginBottom={10}
              marginTop={8}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name={'magnify'}
              size={28}
            />
          )
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'chevron-left'}
              size={30}
              onPress={() => navigation.goBack(null)}
              style={{ marginLeft: 0 }}
            />
          ),
          
          headerRight: () => (
            <Pressable onPress={() => toggleFunction()}>
              {toggle ? <MaterialCommunityIcons name={'bookmark-outline'} color={'black'} size={26} /> :
                <MaterialCommunityIcons name={'bookmark'} color={'#6200EE'} size={26} />}
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const Merchandise = ({ navigation }) => {
  const [toggle, setToggle] = useState(true);
  const toggleFunction = () => {
    setToggle(!toggle);
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="商品"
        component={MerchandiseScreen}
        options={{
          title: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={24}
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 20 }}
            />
          ),
          headerTitle: () => (
            <Image
              source={require('../images/logo_black.png')}
              style={{ width: 140, height: 50 }}
              alt="logo pic"
              marginLeft={70}
              marginBottom={10}
              marginTop={8}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name={'magnify'}
              size={28}
            />
          )
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'chevron-left'}
              size={30}
              onPress={() => navigation.goBack(null)}
              style={{ marginLeft: 0 }}
            />
          ),
          headerRight: () => (
            <Pressable onPress={() => toggleFunction()}>
              {toggle ? <MaterialCommunityIcons name={'bookmark-outline'} color={'black'} size={26} /> :
                <MaterialCommunityIcons name={'bookmark'} color={'#6200EE'} size={26} />}
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;