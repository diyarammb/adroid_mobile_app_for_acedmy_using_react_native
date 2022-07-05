import React ,{useEffect,useState}from "react";
import {View,Text,StyleSheet} from "react-native"
import database from '@react-native-firebase/database'


export default function Viewcourse(){

    let [data,setdata]=useState([])


    useEffect(()=>{
        database().ref('/courses/coursename').once('value')
    .then(snapshot => {
     console.log(snapshot.val());
     var value = Object.values(snapshot.val())
     console.log(value)
     setdata(value);
    // console.log(snapshot.val());

})
.catch(error => {
    console.error(error);
    });
    },[])
 return (
<View style={styles.container}>
 {data.map((v,i)=>{
    return <View key={i}  style={styles.course}>
    <Text style={styles.txt}>course Title :{v.course_title}</Text>
    <Text style={styles.subtit}> course duration:{v.course_duration}</Text>
    <Text style={styles.tit}> course Teacher :{v.course_teacher}</Text>
    <Text style={styles.tim}> course Time :{v.course_time}</Text>
</View>
 })}

</View>

);
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        padding: 24,
        backgroundColor: "lightgray", 
    },
    course:{
        backgroundColor:"#075eb0",
        height:150,
        margin:10,
        borderRadius:10

    },
    txt:{
     marginLeft:80,
     margin:10,
     color:"white",
     fontSize:15
    },
    subtit:{
        marginLeft:90,
        margin:5,
        color:"white",
        fontSize:10

    },tit:{

        marginLeft:90,
        margin:5,
        color:"white",
        fontSize:10
    },tim:{
        marginLeft:90,
        margin:5,
        color:"white",
        fontSize:10 
    }
      

})