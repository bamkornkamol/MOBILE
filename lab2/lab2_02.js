import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.part1}>
        <Image 
          source={{uri :'https://cdn.discordapp.com/attachments/890872328374849548/1130721904282578944/IT_Logo.png',}}
          style={styles.img}
        />
        <Text style={{fontSize: 25}}>คณะเทคโนโลยีสารสนเทศ</Text>
        <Text style={{fontSize: 15}}>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหานลาดกระบัง</Text>
      </View>
      <View style={styles.part2}>
        <Pressable style={styles.button}>
          <Text style={{color:'#fff'}}>PROGRAMS</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={{color:'#fff'}}>ABOUT US</Text>
        </Pressable>
      </View>
      
      <StatusBar style="auto" />
      
    </View>
  );  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  part1:{
    width:'100%', 
    flex:5, 
    justifyContent:'center', 
    alignItems:'center'
  },
  part2:{
    width:'100%', 
    flex:1, 
    justifyContent:'center', 
    alignItems:'center'
  },
  img: {
    width: 200, 
    height: 150, 
    resizeMode: 'contain', 
    marginBottom: 20
  },
  button:{
    fontSize : 20,
    width: 300,
    height: 40,
    backgroundColor: '#007AFF',
    padding: 5,
    textAlign: 'center',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

});
