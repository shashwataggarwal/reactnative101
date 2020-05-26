import React, { useState } from 'react';
import { Provider as PaperProvider, BottomNavigation, Button, Appbar, Text, Title, DefaultTheme } from 'react-native-paper';
import { StyleSheet, SafeAreaView, StatusBar, Platform, View  } from 'react-native';

let dict = {
  index: 0,
  routes: [
    { key: 'music', title: 'Music', icon: 'music' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ],
}


export default function App() {

  const [_i, setI] = useState(0);

  StatusBar.setBarStyle('light-content');
  StatusBar.setBackgroundColor('#c76512')
  const _handleIndexChange = (index) => {
    console.log(index);
    _setState(prevState => {
      console.log(`PREVIOUS INDEX = ${prevState.index}`)
      prevState.index = index;
      return ({...prevState});
    });

  };

  const _renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });


  return (
    <PaperProvider theme={theme}>
      <Appbar.Header>
      <Appbar.Content 
        title = "LocalSewa"
        style = {styles.center}
      />
    </Appbar.Header>
    <BottomNavigation
        navigationState={{
          index: _i,
          routes: [
            { key: 'music', title: 'Music', icon: 'music' },
            { key: 'albums', title: 'Albums', icon: 'album' },
            { key: 'recents', title: 'Recents', icon: 'history' },
          ]
        }}
        onIndexChange={(index) => setI(index)}
        renderScene={_renderScene}
      />
      </PaperProvider>
    // <View style={styles.container, styles.droidSafeArea}>
    //   <Text>{_state.index}</Text>
    //   <Button onPress = {() => {
    //     _handleIndexChange((_state.index+1)%3);
    //     console.log("PRINTING STATE!");
    //     console.log(_state);
    //   }}>Click Me</Button>
    // </View>
    
  );
}

const MusicRoute = () => 
<View style = {styles.container}>
<Title>MUSIC</Title>
</View>
;

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
    // justifyContent: 'center',
  }
});

const theme = {
  ...DefaultTheme,
  roundness: 2,
  mode: 'adaptive',
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff8217',
    accent: '#f1c40f',
  },
};
