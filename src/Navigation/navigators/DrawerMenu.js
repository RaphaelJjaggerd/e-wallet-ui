import React from 'react'
import { View, Text } from 'react-native'
import { useTheme } from 'styled-components'

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer'

import {McText, McImage} from 'Components'
import {images} from 'Constants'
import {Home} from 'Screens'; 

const Drawer = createDrawerNavigator();

const DrawerMenu = () => {
  const theme =  useTheme()
  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.boxBackground
    }}>
      <Drawer.Navigator 
        hideStatusBar={true}
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          width: '60%',
          background:'transparent'
        }}
        sceneContainerStyle={{
          backgroundColor:'transparent'
        }}
        initialRouteName="Home"
      >
        <Drawer.Screen name="Home">
          {(props) => <Home{...props}/> }
        </Drawer.Screen>

      </Drawer.Navigator>
      
    </View>
  )
}

export default DrawerMenu