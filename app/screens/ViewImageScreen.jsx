import React from "react";
import { View, Image, Pressable, Text } from "react-native";
import { IconButton } from 'react-native-paper';

const ViewImageScreen=({navigation})=>{


	return(

		<View style={{flexDirection:"column",flex:1,backgroundColor:"#000000"}}>

			<View style={{paddingTop:"30px",flex:0.25, flexDirection:"row", justifyContent:"space-between"}}>

					


			 	

					<IconButton style={{height:"50px",width:"50px",backgroundColor:"#eb3449"}} icon="back"  onPress={() => navigation.navigate('Welcome', {}) } />                                                            
		                        
		                                                                                   	              
				<IconButton style={{height:"50px",width:"50px",backgroundColor:"#34ebd5"}}/>


		


			</View>

			<View style={{flex:3}}>

				<Image style={{height:"100%",weight:"100%"}}source={require("../assets/chair.jpg")} resizeMode="contain"/>

			</View>


		</View>

	);


};

export default ViewImageScreen;
