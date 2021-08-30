import React from "react";
import { View, Image, Pressable, Text } from "react-native";
import { IconButton } from 'react-native-paper';

//using String for margin padding height width etc causes error without being specified, unless
//it is percentage, viewport width and viewport height don't work either... should just use numbers for px

const ViewImageScreen=({navigation})=>{


	return(

		<View style={{flexDirection:"column",flex:1,backgroundColor:"#000000"}}>

			<View style={{paddingTop:30 ,flex:0.25, flexDirection:"row", justifyContent:"space-between"}}>

					


			 	

					<IconButton style={{height:50, width:50,backgroundColor:"#eb3449"}} icon="back"  onPress={() => navigation.navigate('Welcome', {}) } />                                                            
		                        
		                                                                                   	              
				<IconButton style={{height:50 ,width:50,backgroundColor:"#34ebd5"}}/>


		


			</View>

			<View style={{flex:3}}>

				<Image style={{height:"100%",width:"100%"}}source={require("../assets/chair.jpg")} resizeMode="contain"/>

			</View>


		</View>

	);


};

export default ViewImageScreen;
