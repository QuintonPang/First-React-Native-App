import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground,
	Pressable

} from 'react-native';


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
											                 

			marginTop:"150px",                         
											       
		},

		      
		logo:{
				                                                                        

			width:"50px",
				             
			height:"50px",
				              
			position:"absolute",                                       alignSelf:"center",                                        marginTop:"90px",
				                                                           

				
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
		

		
		<Pressable style={styles.login}onPress={() => navigation.navigate('ViewImage', {}) } >

			<Text>Login</Text>

		</Pressable>
	
	

		

		<View style={styles.register}/>

		

		</View>



	);

};

export default WelcomeScreen;
