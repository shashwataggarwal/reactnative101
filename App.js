import React, { useState } from 'react';
import { Provider as PaperProvider, BottomNavigation, Button, Appbar, Text, Title, DefaultTheme, Card, Paragraph, Avatar } from 'react-native-paper';
import { StyleSheet, SafeAreaView, StatusBar, Platform, View, ScrollView } from 'react-native';
import { render } from 'react-dom';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
	StatusBar.setBarStyle('light-content');
	StatusBar.setBackgroundColor('orange')
	const [_i, setI] = useState(0);




	const _renderScene = BottomNavigation.SceneMap({
		music: MusicRoute,
		albums: AlbumsRoute,
		recents: RecentsRoute,
	});


	return (
		<PaperProvider theme={theme}>
			<Appbar.Header style={styles.topHeader}>
				<Appbar.Content
					title="LocalSewa"
					style={styles.center}
				/>
				<Appbar.Action icon="magnify" style={styles.profileImage} onPress={() => {}} />
			</Appbar.Header>
			<BottomNavigation
				navigationState={{
					index: _i,
					routes: [
						{ key: 'music', title: 'Complaints', icon: 'music' },
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

function LeftContent(props) {
	return (<Avatar.Icon {...props} icon="folder" />)
}

const CardComponent = () => (
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
const MusicRoute = () => {
	const [_i, setI] = useState(0);
	const _renderScene = BottomNavigation.SceneMap({
		myComplaints: myComplaintsRoute,
		allComplaints: allComplaintsRoute 
		// recents: RecentsRoute,
	});

	return (
		<BottomNavigation
			navigationState={{
				index: _i,
				routes: [
					{ key: 'myComplaints', title: 'My Complaints', icon: 'music' },
					{ key: 'allComplaints', title: 'All Complaints', icon: 'album' },
				]
			}}
			barStyle={styles.navTabs}
			style={styles.navTabs2}
			onIndexChange={(index) => setI(index)}
			renderScene={_renderScene}
			// shifting='true'
			labeled='true'
		/>
	)
}

const AlbumsRoute = () => <View style={styles.container}>
	<Title>ALBUMS</Title>
</View>;

function myComplaintsRoute(){
	return(
		<ScrollView contentContainerStyle={styles.container}>
			<CardComponent/>
			<CardComponent/>
			<CardComponent/>
			<CardComponent/>
		</ScrollView>
	)
}
const allComplaintsRoute = () => <View style={styles.container}>
<Title>All Complaints</Title>
</View>;

const RecentsRoute = () => <View style={styles.container}>
	<Title>RECENTS</Title>
</View>;
// const ProfileImage = () => (
// 	<Avatar.Icon size={24} icon="music" />
//   );
const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
		paddingTop:30
	},
	cardStyles: {
		marginBottom: 8
	},
	droidSafeArea: {
		flex: 1, 
		// backgroundColor: '#FBD1A2',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		paddingLeft: 4
	},
	center: {
		alignItems: 'center',
		paddingBottom:25,
		// elevation:0
	},
	navTabs:{
		position:'absolute',
		top:0,
		marginTop:0,
		borderRadius:100,
		backgroundColor:'#FFFFFF',
		marginHorizontal:20,
		height:60,
		// transform:[{'translate':(0,0,1)}]
		// elevation:100
	},
	navTabs2:{
		zIndex:100,
		// borderRadius:'100px'
	},
	topHeader:{
		zIndex:-100,
		height:55,
		// paddingBottom:25
	},
	profileImage:{
		position:'absolute',
		left:0,
		backgroundColor:"#EFEFEF"
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
