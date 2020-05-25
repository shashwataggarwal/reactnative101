import React, { useState } from 'react';
import { Provider as PaperProvider, BottomNavigation, Button } from 'react-native-paper';
import { StyleSheet, SafeAreaView, StatusBar, Platform, Text, View  } from 'react-native';

let dict = {
  index: 0,
  routes: [
    { key: 'music', title: 'Music', icon: 'music' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ],
}


export default function App() {

  const [_state, _setState] = useState({
    index: 0,
    routes: [
      { key: 'music', title: 'Music', icon: 'music' },
      { key: 'albums', title: 'Albums', icon: 'album' },
      { key: 'recents', title: 'Recents', icon: 'history' },
    ],
  });

  const [_i, setI] = useState(0);

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
        style = {styles.droidSafeArea}
      />
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

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBD1A2',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#FBD1A2',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingLeft:4
  }
});
