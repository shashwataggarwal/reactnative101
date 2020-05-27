import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { Container, Text, Header, Left, Right, Body, Button, Icon, Title, Content, Footer, FooterTab, Tabs, Tab } from 'native-base';
import * as Font from 'expo-font';



function MyTabs() {
	return (<Tabs style={{ position: 'relative', marginTop: -12, marginHorizontal:20 }}>
		<Tab heading="Tab1">
			<Text>Hello 1</Text>
		</Tab>
		<Tab heading="Tab2">
			<Text>Hello 1</Text>
		</Tab>
		<Tab heading="Tab3">
			<Text>Hello 1</Text>
		</Tab>
	</Tabs>)
}
function MyHeader() {
	return (<Header>
		<Left>
			<Button transparent>
				<Icon name='menu' />
			</Button>
		</Left>
		<Body>
			<Title>Header</Title>
		</Body>
		<Right />
	</Header>)
}
function MyFooter() {
	return(<Footer>
		<FooterTab>
			<Button vertical>
				<Icon name="apps" />
				<Text>Apps</Text>
			</Button>
			<Button vertical>
				<Icon name="camera" />
				<Text>Camera</Text>
			</Button>
			<Button vertical active>
				<Icon active name="navigate" />
				<Text>Navigate</Text>
			</Button>
			<Button vertical>
				<Icon name="person" />
				<Text>Contact</Text>
			</Button>
		</FooterTab>
	</Footer>)
}

export default function App() {
	[isReady, setIsReady] = useState(false);
	async function componentDidMount() {
		await Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
		});
		setIsReady(true);
	}
	componentDidMount();
	return (!isReady) ? (
		<AppLoading />
	) : (
			<Container>
				<MyHeader />
				<MyTabs />
				<MyFooter/>
			</Container>
		);

}
