import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Text>Clicksoft</Text>
      <View>
        <Text>Começo de Aprendizado</Text>
        <Image source={{uri: "https://img2.gratispng.com/20180716/tza/kisspng-github-computer-icons-clip-art-gits-5b4d20ab1f4131.145288281531781291128.jpg"}} style={{width: 200, height: 200}}/>
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="Digite sua busca no GitHub"
      />
    </ScrollView>
  );
}
