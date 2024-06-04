import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web';

const adres = () => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.ustkisim}>
            
            <Text>Adres Bilgileri</Text>
        </View>
        <View style={styles.ortakisim}>
            <TextInput 
            style={styles.input} 
            onChangeText={onChangeText} 
            value={detayadres} 
            placeholder="Mahalle / Cadde / Sokak *"
            />
            <View style={styles.ortadanayir}>
                <TextInput
                    style={styles.inputiki} 
                    onChangeText={onChangeText} 
                    value={il} 
                    placeholder="İl"
                />
                <TextInput
                    style={styles.inputiki} 
                    onChangeText={onChangeText} 
                    value={ilce} 
                    placeholder="İlçe"
                />
            </View>
        </View>
        <View style={styles.altkisim}>
            <TextInput 
            style={styles.input} 
            onChangeText={onChangeText} 
            value={baslik} 
            placeholder="Baslik"
            />
            <Button
                title="Kaydet"
                color="red"
                onPress={() => Alert.alert('Adres Başariyla Kaydedilmiştir')}
            />
        </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default adres

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '%90',
        height: '%90',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginTop: 10,
        fontSize: 24,
        color: '#000000',
        justifyContent: 'flex-start',
    },
    tinyLogo: {
        width: 300,
        height: 300,
    },
    input: {
        height: 40,
        width: '%60',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    ustkisim: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    ortakisim: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    altkisim: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    ortadanayir: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputiki: {
        height: 40,
        width: '&30',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        textAlign: 'left',
        justifyContent: 'flex-start',
    },
})