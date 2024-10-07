import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, Image, Button, Modal, TextInput } from 'react-native'; 
import { Provider as PaperProvider, Switch } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true); 
  const [profileName, setProfileName] = useState("John Lloyd D. Morden");
  const [modalVisible, setModalVisible] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const showPersonalInfo = () => {
    Alert.alert("Personal Information", "John Lloyd D. Morden\n21 Years Old\nBirthdate: July 03, 2003\nAddress: Carmen, Cagayan de Oro City");
  };

  const showMedia = () => {
    Alert.alert("Media", "Not Available");
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
    Alert.alert("Notifications", notificationsEnabled ? "Notifications Disabled" : "Notifications Enabled");
  };

  const signOut = () => {
    Alert.alert("Sign Out", "Successfully signed out.");
  };

  const saveProfileName = () => {
    setModalVisible(false);
    // Optionally show a success message
    Alert.alert("Profile Updated", `Your name has been updated to ${profileName}`);
  };

  return (
    <PaperProvider>
      <View style={[styles.container, { backgroundColor: isDarkTheme ? '#1A1A2E' : '#FFFFFF' }]}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <Image source={require('./assets/profile.jpg')} style={styles.profileImage} />
          <Text style={[styles.nameText, { color: isDarkTheme ? '#FFFFFF' : '#333333' }]}>{profileName}</Text>
          <Text style={[styles.titleText, { color: isDarkTheme ? '#CCCCCC' : '#888888' }]}>IT Student, Philippines</Text>
          <View style={styles.editProfileButton} onTouchEnd={() => setModalVisible(true)}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </View>
        </View>

        {/* Settings Options */}
        <View style={styles.settingsSection}>
          <View style={styles.settingOption}>
            <MaterialCommunityIcons name="weather-night" size={24} color={isDarkTheme ? '#FFFFFF' : '#000000'} />
            <Text style={[styles.settingText, { color: isDarkTheme ? '#FFFFFF' : '#000000' }]}>Dark Mode</Text>
            <Switch value={isDarkTheme} onValueChange={toggleTheme} />
          </View>
          <View style={styles.settingOption}>
            <MaterialCommunityIcons name="grid" size={24} color="orange" />
            <Text style={[styles.settingText, { color: isDarkTheme ? '#FFFFFF' : '#000000' }]}>Personal Information</Text>
            <Button title=">" color="#808080" onPress={showPersonalInfo} />
          </View>
          <View style={styles.settingOption}>
            <MaterialCommunityIcons name="image" size={24} color="blue" />
            <Text style={[styles.settingText, { color: isDarkTheme ? '#FFFFFF' : '#000000' }]}>Media and Photos</Text>
            <Button title=">" color="#808080" onPress={showMedia} />
          </View>
          <View style={styles.settingOption}>
            <MaterialCommunityIcons name="bell" size={24} color="purple" />
            <Text style={[styles.settingText, { color: isDarkTheme ? '#FFFFFF' : '#000000' }]}>Notification</Text>
            {/* Replace Button with Switch */}
            <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
          </View>
        </View>

        {/* Footer Section */}
        <View style={styles.footer}>
          <Button title="Sign Out" onPress={signOut} color="#32CD32" />
        </View>

        {/* Edit Profile Modal */}
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Edit Profile Name</Text>
              <TextInput
                value={profileName}
                onChangeText={setProfileName}
                style={styles.textInput}
              />
              <Button title="Save" onPress={saveProfileName} />
              <Button title="Cancel" onPress={() => setModalVisible(false)} color="red" />
            </View>
          </View>
        </Modal>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'rgba(173,216,230,0.8)',
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleText: {
    fontSize: 16,
    textAlign: 'center',
  },
  editProfileButton: {
     backgroundColor:'#8A2BE2', 
     borderRadius:25,
     paddingVertical:10,
     paddingHorizontal:20,
     marginTop:10
   },
   editProfileText:{
     color:'white',
     fontSize:16,
     textAlign:'center',
   },
   settingsSection:{
     marginBottom:20
   },
   settingOption:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
     paddingVertical:15,
     borderBottomWidth:StyleSheet.hairlineWidth,
     borderColor:'#ccc'
   },
   settingText:{
     fontSize:16,
     flexGrow:1
   },
   footer:{
      marginTop:'auto',
      alignItems:'center'
   },
   modalContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'rgba(0,0,0,0.5)'
   },
   modalContent:{
      width:'80%',
      backgroundColor:'white',
      paddingVertical:20,
      paddingHorizontal:20,
      borderRadius:10
   },
   modalTitle:{
      fontSize:18,
      marginBottom:15
   },
   textInput:{
      height:40,
      borderColor:'#ccc',
      borderWidth:1,
      marginBottom:15,
      paddingHorizontal:10
   }
});

export default App;
