import React, { useState } from 'react';
import { Provider as PaperProvider, BottomNavigation, Button, Appbar, Text, Title, DefaultTheme, Card, Paragraph, Avatar, Chip, } from 'react-native-paper';
import { StyleSheet, SafeAreaView, StatusBar, Platform, View, Image,  } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';


console.reportErrorsAsExceptions = false; // copy paste this line in your App.js 
const Tab = createMaterialTopTabNavigator();


export default function App() {

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'complaints', title: 'Complaints', icon: 'comment-alert-outline' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
    { key: 'test', title: 'Testing', icon: 'battery' },
  ]);

  StatusBar.setBarStyle('light-content');
  StatusBar.setBackgroundColor('#c76512');

  const _renderScene = BottomNavigation.SceneMap({
    complaints: ComplaintsRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    test: TestRoute,
  });

  const [i, setI] = useState(0);
  const [rout] = useState([
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);
  
  const _renderI = BottomNavigation.SceneMap({
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <PaperProvider theme={theme}>

      <NavigationContainer>
      <Appbar.Header>
      <Avatar.Image size={37} source={require('./assets/shashwat.png')} style = {{paddingLeft:10}} onPress={()=> console.log('press')} />
      <Appbar.Content 
        title = "Complaints"
        style = {styles.center}
        color = "#fff"
      />
      <Appbar.Action icon="shopping" onPress={()=> console.log('kk')} />
    </Appbar.Header>
    <Tab.Navigator tabBarOptions = {{
        style: {
          backgroundColor: 'green',
          marginHorizontal: '10%',
          width: '75%',
          bord: 5
        }
    }}>
      <Tab.Screen name="Home" component={AlbumsRoute} />
      <Tab.Screen name="Settings" component={RecentsRoute} />
    </Tab.Navigator>
    <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange = {setIndex}
        renderScene = {_renderScene}
        activeColor = "#fff"
        shifting = {false}
      />
      </NavigationContainer>
      </PaperProvider>

  );
}

const ComplaintsRoute = () => {
  const imageLeft = () => <Avatar.Image size={47} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsNUZfmqZRnO9cTsNxZ1dqlrI_zsBOVr30y6QgWp5pnF6Ikv5B&usqp=CAU' }} />
  const labelRight = () => <Chip icon='check' style={{marginRight:4, backgroundColor:'#9df28a', }}>Resolved</Chip>
  return (
    <Card style={{margin:10}}>
    <Card.Title title="Neil Armstrong" subtitle="7 hours ago" left={imageLeft} right={labelRight}/>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>

  )  
}
;

const TestRoute = () => {

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);

  const _renderScene = BottomNavigation.SceneMap({
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
   <BottomNavigation 
   navigationState={{index, routes}}
   onIndexChange = {setIndex}
   renderScene = {_renderScene}
   activeColor = "#fff"
   theme = {secondTheme}
   barStyle = {{position:'absolute', top:-10, height:20, marginHorizontal: '5%',}}
   />
  )
}

const AlbumsRoute = () => <View style = {styles.container}>
<Title>ALBUMS</Title>
</View>;

const RecentsRoute = () => <View style = {styles.container}>
<Title>RECENTS</Title>
</View>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FBD1A2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  droidSafeArea: {
    flex: 1,
    // backgroundColor: '#FBD1A2',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingLeft:4
  },
  center: {
    alignItems: 'center',  
  },
});

const theme = {
  ...DefaultTheme,
  roundness: 2,
  mode: 'adaptive',
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff8217',
    accent: '#f1c40f',
    placeholder: "#abcdef"
  },
};

const secondTheme = {
  ...DefaultTheme,
  roundness: 2,
  mode: 'adaptive',
  colors: {
    ...DefaultTheme.colors,
    primary: '#0f8217',
    accent: '#f1c40f',
    placeholder: "#abcdef"
  },
};
