import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View, Pressable, Image, FlatList, SafeAreaView } from 'react-native';

export default function App() {
  const allInIT = [
    {img: 'https://cdn.discordapp.com/attachments/890872328374849548/1130721905373085847/course-bach-it.jpg', name: 'Information Technology'},
    {img: 'https://cdn.discordapp.com/attachments/890872328374849548/1130721905075302460/course-bach-dsba.jpg', name: 'Data Science and Business Analytics'},
    {img: 'https://cdn.discordapp.com/attachments/890872328374849548/1130721904806875157/course-bach-bit.jpg', name: 'Business Information Technology'},
    {img: 'https://cdn.discordapp.com/attachments/890872328374849548/1130721904538419220/course-bach-ait.jpg', name: 'Artificial Intelligence Technology'}
  ]

  return (
    <View style={styles.container}>
      <View style={styles.part1}>
        <View style={{flex:1, paddingLeft: 20}}>
          <Image 
            source={{uri :'https://cdn.discordapp.com/attachments/890872328374849548/1130721904282578944/IT_Logo.png'}}
            style={styles.img}
          />
        </View>
        
        <Text style={styles.texthead}>Programs</Text>
      </View>

      <View style={styles.part2}>
        <SafeAreaView>
          <FlatList
            data={allInIT}
            keyExtractor={(item)=> item}
            renderItem={({item}) => {
            return (
              <View >
                <Image 
                  source={{uri : item.img}}
                  style={styles.img2}
                />
                <View style={styles.box}>
                  <Text style={styles.textname}>{item.name}</Text>
                </View>
              </View> 
            )}}
          />
        </SafeAreaView>
        

          {/* <Image 
            source={{uri :'https://cdn.discordapp.com/attachments/890872328374849548/1130721905373085847/course-bach-it.jpg',}}
            style={styles.img2}
          />
          <View style={styles.box}>
            <Text style={styles.textname}>Information Technology</Text>
          </View> */}


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
    height: '100%'
  },
  part1:{
    width:'100%', 
    flex:1, 
    justifyContent:'center', 
    alignItems:'center',
    backgroundColor: '#8ddbeb',
    flexDirection: 'row',
  },
  part2:{
    width:'100%', 
    flex:6, 
    justifyContent:'center', 
    alignItems:'center',
    backgroundColor: '#fff'
  },
  img: {
    width: 70, 
    height: 70, 
    resizeMode: 'contain', 
    alignSelf: 'flex-start',
    marginTop:30
  },
  texthead: {
    flex:1.5,
    fontSize: 35, 
    fontWeight: 'bold', 
    color: '#ed7424',
    marginTop:40
  },
  img2: {
    width: '100%', 
    height: 250, 
    resizeMode: 'contain', 
    alignSelf: 'flex-start',
  },
  textname: {
    fontWeight: 'bold', 
    fontSize: 18
  },
  box : {
    height:50,
    backgroundColor: '#bababa', 
    alignItems:'center', 
    justifyContent:'center'
  }
});
