import React, {useRef} from 'react';
import { useState } from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';
import SignatureScreen from 'react-native-signature-canvas';

export const ESignature = () => {
const [signature, setSignature] = useState()
  const ref = useRef();

  const handleSignature = signature => {
    setSignature(signature)
    // onOK(signature);
  };

  const handleClear = () => {
    ref.current.clearSignature();
  }

  const handleConfirm = () => {
    console.log("end");
    ref.current.readSignature();
  }

  const style = `.m-signature-pad--footer {display: none; margin: 0px;}`;
  console.log("==#data==",signature)
  return (
    <View>
        <View style={{position: 'relative',width: 200, height: 100, marginTop: 20}}>
        {signature ?  <Image style={{width: 100, height: 100, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}} source={{uri: signature}} /> : null}
        </View>
       <View style={styles.container}>
      <SignatureScreen
          ref={ref}
          onOK={handleSignature} 
          webStyle={style}
      />
      </View>
      <View style={styles.row}>
        <Button
            title="Clear"
            onPress={handleClear}
        />
        <Button
          title="Confirm"
          onPress={handleConfirm}
        />
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {

    height: height-100,
    padding: 10,
    marginTop: 20
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  }
});