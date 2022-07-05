import React,{useEffect,useState} from "react";
import database from '@react-native-firebase/database'
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from "react-native"



export default function Addcourse(){
const [name,setname]=useState()
const [duration,setduration]=useState()
const [teachername,setteachername]=useState()
const [timing,settime]=useState()


const addcoursedata=()=>{


    database().ref("/courses").child("coursename").push({
        course_title:name,
        course_duration:duration,
        course_teacher:teachername,
        course_time:timing
      }) 

}

return(

<View style={styles.container}>
<View>
<Text style={styles.title}>Add New Course</Text>
</View>

<View>
<TextInput  style={styles.formcontrol}
     placeholder ="Course Name"
     value={name}
     onChangeText={(e)=> setname(e)}
    />
    <TextInput  style={styles.formcontrol}
     placeholder ="Course duration"
     value={duration}
     onChangeText={(e)=> setduration(e)}
     />

<TextInput  style={styles.formcontrol}
     placeholder ="Course Teacher name"
     value={teachername}
     onChangeText={(e)=> setteachername(e)}
     />
     <TextInput  style={styles.formcontrol}
     placeholder ="time"   
     value={timing}
     onChangeText={(e)=> settime(e)}
     />
     <TouchableOpacity style={styles.button}
    onPress={addcoursedata}
    >
    <Text style={styles.buttonText}>Add course</Text>
    </TouchableOpacity>
</View>


</View>


)


}
const styles =StyleSheet.create({
    container:{
        flex:1,
        padding: 24,
        backgroundColor: "white"
    },
    title:{
        color:"blue",
        fontSize:30,
        marginLeft:50,
        marginTop:100,
        padding:10

    },
    course:{
        backgroundColor:"red",
        flex:1,

    },
    formcontrol:{ 
        backgroundColor:"lightgray",
        margin:10,
        
        borderRadius:5
      
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
          margin:10,  
      },
      

})