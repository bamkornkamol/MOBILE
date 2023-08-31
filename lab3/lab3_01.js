import React, { useState } from "react";
import { StyleSheet, TextInput, Button, Text, View, Pressable, FlatList, SafeAreaView, ScrollView } from "react-native";


export default function App (){
  const [text, addArray] = useState([]);
  const [add, changetext] = useState('')

  const addText = () => { 
    text.push(add)
    console.log(text)
    changetext('')
  }

  return (
    <View style={styles.test}>
      <Text style={{marginTop: 120}}>สมุดบันทึก</Text>

      <TextInput
        placeholder="เพิ่มข้อความที่นี่"
        style={styles.input}
        onChangeText={changetext}
        value={add}
      />

      <Pressable onPressIn={addText} style={styles.save}>
        <Text style={{color:"#fff"}}>บันทึก</Text>
      </Pressable>

      <SafeAreaView style={{flex:1, margin:10,}}>
        <ScrollView>
          {text.map((item) => {
            return(
              <View key={item}>
                <Text style={{fontSize: 20}}>{item}</Text>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>

      {/* <Button title="save" onPress={showText}></Button> */}

      {/* {text.map((item) => {
        return(
          <View key={item}>
            <Text>{item}</Text>
          </View>
        );
      })} */}
      
      {/* <FlatList
        data={text}
        keyExtractor={(item)=> item}
        renderItem={({item}) => {
        return (
        <Text>{item}</Text>
        )
        }}
      /> */}

    </View>
  );
}


const styles = StyleSheet.create({
  test: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    height: '100%',
    
  },
  input : {
    borderWidth: 1,
    padding : 10, 
    width: 250, 
    margin: 10
  }, 
  save : {
    width: 250, 
    height: 50,
    backgroundColor: "#3f9eeb",
    alignItems: 'center',
    justifyContent: 'center',
  }, 

})



