import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DetailScreen = () => {
  const [isScreenDisabled, setScreenDisabled] = useState(false);
  const [seconds, setSeconds] = useState(0);

  // Function to disable the screen for a specific time
  const disableScreenForTime = (timeInMilliseconds) => {
    setScreenDisabled(true);

    // Enable the screen after the specified time
    setTimeout(() => {
      setScreenDisabled(false);
      console.log('falseeeeeeeeeeeee');
    }, timeInMilliseconds);
  };

  // Function to handle the button press
  const handleButtonPress = () => {
    // Disable the screen for 5 seconds (5000 milliseconds)
    disableScreenForTime(5000);
    formatTime(50000);
  };

  // Helper function to format seconds into HH:mm:ss
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
// useEffect(()=>{
//     disableScreenForTime(5000);
// })
  return (
    <View style={styles.container}>
      
      {/* Render other components here */}
      
      {isScreenDisabled ? (
        <View>
            <Text style={styles.timerText}>{'asdlkfjlads' + formatTime(seconds)}</Text>
        </View>
      )
    :
    <TouchableOpacity onPress={handleButtonPress}>
        <Text>Disable Screen for 5 seconds</Text>
      </TouchableOpacity>
    }
    </View>
  );
};

const styles = StyleSheet.create({
        // container: {
        //   flex: 1,
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   backgroundColor: '#f5f5f5',
        // },
  });
export default DetailScreen;
