import { StyleSheet, Text, View, Image} from 'react-native'; import { ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.ProfileIcon}>
          <Image source={require('./assets/profile.png')} />
        </View>
          <View>
          <Text style={styles.title}>Welcome back,</Text>
          <Text style={styles.subText}>Eric Atsu</Text>
        </View>
        <View style={styles.SearchIcon}>
          <Image source={require('./assets/search.png')} />
        </View>
      </View>
      <View style={styles.Card}>
          <Image source={require('./assets/Card.png')} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 12,
    color: '#A0A3BD',
    alignItems: 'flex-start',
    marginTop: 10,
    marginLeft: 8,
  

  },
  subText: {
    fontSize: 15,
    marginTop: 8,
    marginLeft: 8,
    paddingRight: 175,
  },
  SearchIcon: {
    width: 45,
    height: 45,
    marginTop: 4,
    backgroundColor: '#F2F2F2',
    borderRadius: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  ProfileIcon: {
    width: 50,
    height: 52,
    display: "flex",
    marginTop: 4,
    alignItems: "center", 
    paddingRight: 17,
  },
  Card: {
    width: 350,
    height: 500,
    marginTop: 30,
    paddingLeft: 20
  },
 
});
