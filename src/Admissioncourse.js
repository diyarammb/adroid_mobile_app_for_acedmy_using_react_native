import React, { useEffect ,useState} from "react";
import {View ,Text,StyleSheet,TextInput,TouchableOpacity,Image} from "react-native"
// import firestore from '@react-native-firebase/firestore';\
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'


function Admissioncourse({navigation}){

const[name,setname]=useState()
const[email,setemail]=useState()
const[course,setcourse]=useState()
 
const createcourse =()=>{
database().ref("/admisionForm").child("users").push({
    name:name,
    email:email,
    course:course
  });

}
   
    
    return(
    <View style={styles.container}> 
     <View> 
     
    <Text style={styles.title}>Apply for Course</Text>
    <TextInput  style={styles.formcontrol}
    placeholder ="Name"
    value={name}
    onChangeText={(e)=> setname(e)}
    /> 
    <TextInput  style={styles.formcontrol}
    placeholder ="Email"
    value={email}
    onChangeText={(e)=> setemail(e)}
    />

    <TextInput  style={styles.formcontrol}
    placeholder ="Course Name"
    value={course}
    onChangeText={(e)=> setcourse(e)}
    />
    </View>
    <TouchableOpacity style={styles.button}
    onPress={createcourse}
    >
    <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>

      </View>
    
    );
    
    }
    const styles =StyleSheet.create({
    container:{
      flex:1,
      padding: 24,
      backgroundColor: "white"
    
    },
    formcontrol:{
      borderColor:"red",
      backgroundColor:"lightgray",
      margin:8,
      borderRadius:5
    
    },
    title:{ 
      marginLeft:120,
      color:"#205375",
      fontSize:30
    },
    buttonText:{
      backgroundColor:"#205375",
      textAlign:"center",
      color:"#EFEFEF",
      fontSize:15,
      padding:10,
      borderRadius:5
    },
    button:{
        margin:30,  
    },
      
    })
    
    export default Admissioncourse;