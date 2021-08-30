import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from"./app//screens/ViewImageScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

//const Stack = createNativeStackNavigator();


export default function App() {

	const Stack = createNativeStackNavigator();
  
	return (
    
	  <PaperProvider settings={{ icon: props => <AntDesign {...props} />, }}>
   
	  	<SafeAreaView style={{flex:1}}>


	  		<NavigationContainer>

	  {/*screen options can be set individually on Stack.Screen also*/}
	  			<Stack.Navigator screenOptions={{ headerShown: false }}>

	  	
	  				<Stack.Screen
					name="Welcome"
	  				component={WelcomeScreen}
					 />

	  				<Stack.Screen
	          			 name="ViewImage"
	          			 component={ViewImageScreen}
	              	    		 />
					
	  {/*<WelcomeScreen/>*/}
	  {/*<ViewImageScreen/>*/}
      
		  		</Stack.Navigator>

			 </NavigationContainer>
    
	  	</SafeAreaView>

	  </PaperProvider>
  );
};

