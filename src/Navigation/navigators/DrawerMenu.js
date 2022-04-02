import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { useTheme } from 'styled-components'

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer'

import {McText, McImage} from 'Components'
import {Images, Colors} from 'Constants'
import {Home} from 'Screens'; 

const MENUs = [
  {
    name: 'Home',
    label: 'Home'
  },
  {
    name: 'Profile',
    label: 'Profile'
  },
  {
    name: 'Accounts',
    label: 'Accounts '
  },
  {
    name: 'Transactions',
    label: 'Transactions'
  },
  {
    name: 'Stats',
    label: 'Stats'
  },
  {
    name: 'Settings',
    label: 'Settings'
  },
  {
    name: 'Help',
    label: 'Help'
  },
]

const Drawer = createDrawerNavigator();
const CustomDrawerContent = ({navigation, theme}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View
      style={{flex:1}}
    > 
      {/* Header */}
      <View style={{
        width: 210,
        height: 107,
        borderBottomEndRadius: 107 / 2,
        backgroundColor: Colors.grey5,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <View style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            backgroundColor: theme.colors.boxBackground,
            marginRight: 10,
          }}>
            <McImage source={Images.avatar2} />
          </View>
          <View>
            <McText semi size={16} color={theme.colors.text1}>Raphael Ombok</McText>
            <McText semi size={10} color={theme.colors.text3}>Nairobi, Kenya</McText>
          </View>
        </View>

      </View>
      {/* DrawerItems */}
      <DrawerContentScrollView
        scrollEnabled={true}
        contentContainerStyle={{}}
        style={{marginLeft: -18}}
      >
        {MENUs?.map((menu, index)=>{
          return (
            <DrawerItem
              activeTintColor = {theme.colors.boxBackground}
              focused = {activeIndex === index}
              key={index}
              label={({focused})=>{
                return(
                  <View style={{
                    flexDirection:'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                  
                  }}>
                    <View style={{
                        width: 4,
                        height: 33,
                        marginRight: 26,
                        backgroundColor: focused ? theme.colors.primary : 'transparent'

                    }}>

                    </View>
                    <McText size={16} bold={focused} color={theme.colors.text1} >{menu.label}</McText>
                  </View>
                )
              }}
            >

            </DrawerItem>
          )
        })}

      </DrawerContentScrollView>
      {/* Footer */}
      <View style={{marginBottom:27, marginLeft:30}}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
          <McImage source={Images.logout} style={{marginRight:8, tintColor:theme.colors.text2 }} />
          <McText bold size={16} color={theme.colors.text2}>Logout</McText>
        </View> 
        <View style={{marginTop:62}}>
          <McText medium size={10} color={theme.colors.text2}>Version 2.0.1</McText>
        </View>
      </View>
    </View>
  )
}

const DrawerMenu = () => {
  const theme =  useTheme()
  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.boxBackground
    }}>
      <Drawer.Navigator 
        hideStatusBar={false}
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
        drawerContent={(props) =>{
          return(
            <CustomDrawerContent
              navigation={props.navigation}
              theme={theme}
            />
          )
        }}
      >
        <Drawer.Screen name="Home">
          {(props) => <Home{...props}/> }
        </Drawer.Screen>

      </Drawer.Navigator>
      
    </View>
  )
}



export default DrawerMenu