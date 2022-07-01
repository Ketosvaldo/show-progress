import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';
import ProgressBar from './ProgressBar';
export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress(){
      setProgress((currentProgress) => {
        if(currentProgress < 1){
          setTimeout(updateProgress, 300);
        }
        return currentProgress + 0.01;
      })
    }
    updateProgress();
  }, []);
  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} label = {true}/>
    </View>
  );
}