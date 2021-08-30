import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground,
	Pressable

} from 'react-native';


//using String for margin padding height width etc causes error without being specified, unless it is percentage, viewport width and viewport height don't work either... should just use numbers for px


const WelcomeScreen=({navigation})=>{


	const styles = StyleSheet.create({
		  container: {                                                
			  flex:2,
			  backgroundColor: '#fff',
			  alignItems: 'center',                                     		
			  justifyContent: 'center',                               
		  },

		background:{

			
			
			flex:8,

		},
		

		text:{


						

			position:"absolute",
											                 

			alignSelf:"center",
											                 

			marginTop:150,                         
											       
		},

		      
		logo:{
				                                                                        

			width:50,
				             
			height:50,
				              
			position:"absolute",
			alignSelf:"center",   
			marginTop:90,
				                                                           

				
		},

		login:{
				
					 
			flex:1,				
			backgroundColor:"#eb3449",
			justifyContent:"center",
			alignItems:"center",

		


			
		},                                                 
		                                                                  
		register:{

											                                                             
			flex:1,
										
			backgroundColor:"#34ebd5",                                                                                                                                            
		},

	});                                                        

	return(

		<View style={{flex:1}}>		
		
		<ImageBackground style={styles.background} source={require("../assets/background.jpg")}>

				


		<Image style={styles.logo} source={require("../assets/logo-red.png")}/>

		<Text style={styles.text}>Sell what you don't need</Text>

		
		</ImageBackground>
		

		
		<Pressable style={styles.login} onPress={() =>navigation.navigate('ViewImage')}>
			<Text>Login</Text>

		</Pressable>
	
	

		

		<View style={styles.register}/>

		

		</View>



	);

};

export default WelcomeScreen;
