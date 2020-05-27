import React, { useState } from 'react';
import { Provider as PaperProvider, BottomNavigation, Button, Appbar, Text, Title, DefaultTheme, Card, Paragraph, Avatar } from 'react-native-paper';
import { StyleSheet, SafeAreaView, StatusBar, Platform, View, ScrollView} from 'react-native';




export default function App() {

	const [_i, setI] = useState(0);

	StatusBar.setBarStyle('light-content');
	StatusBar.setBackgroundColor('orange')


	const _renderScene = BottomNavigation.SceneMap({
		music: MusicRoute,
		albums: AlbumsRoute,
		recents: RecentsRoute,
	});


	return (
		<PaperProvider theme={theme}>
			<Appbar.Header>
				<Appbar.Content
					title="LocalSewa"
					style={styles.center}
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
	);
}

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = () => (
  <Card style={styles.cardStyles}>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);
const MusicRoute = () =>{
	return(
	<ScrollView contentContainerStyle={styles.container}>
		<MyComponent/>
		<MyComponent/>
		<MyComponent/>
		<MyComponent/>
		<MyComponent/>
	</ScrollView>
	)
}
const AlbumsRoute = () => <View style={styles.container}>
	<Title>ALBUMS</Title>
</View>;

const RecentsRoute = () => <View style={styles.container}>
	<Title>RECENTS</Title>
</View>;

const styles = StyleSheet.create({
	container: {
		padding:8
	},
	cardStyles:{
		marginBottom:8
	},
	droidSafeArea: {
		flex: 1,
		// backgroundColor: '#FBD1A2',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		paddingLeft: 4
	},
	center: {
		alignItems: 'center',
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
