import { Alert, FlatList, Image, Linking, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils'
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput, MyPicker } from '../../components'
import axios from 'axios';
import { apiURL, MYAPP, webURL } from '../../utils/localStorage'
import { showMessage } from 'react-native-flash-message'
import RenderHtml from 'react-native-render-html';
import moment from 'moment'
export default function StokEdit({ navigation, route }) {

    const [kirim, setKirim] = useState(route.params);

    const sendData = () => {
        if (kirim.jenis.length == 0 || kirim.kode.length == 0 || kirim.masuk.length == 0 || kirim.keluar.length == 0) {
            Alert.alert(MYAPP, 'Formulir masih belum lengkap !')
        } else {
            Alert.alert(MYAPP, 'Apakah Anda yakin untuk simpan perubahan ?', [
                { text: 'TIdak' },
                {
                    text: 'Ya',

                    onPress: () => {
                        axios.post(apiURL + 'stok_update', kirim).then(res => {
                            console.log(res.data);
                            if (res.data == 200) {
                                showMessage({
                                    message: 'Data berhasil di simpan !',
                                    type: 'success'
                                });
                                navigation.pop(2);
                            }
                        })
                    }
                }
            ])
        }
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            // padding: 10,
        }}>
            <MyHeader judul="Stock Opname Edit" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false} style={{
                padding: 20,
            }}>

                <MyCalendar label="Tanggal" value={kirim.tanggal} onDateChange={x => setKirim({
                    ...kirim,
                    tanggal: x
                })} />
                <MyGap jarak={20} />
                <MyInput label="Jenis" value={kirim.jenis} onChangeText={x => setKirim({
                    ...kirim,
                    jenis: x
                })} icon={false} />
                <MyGap jarak={20} />
                <MyInput label="Kode" value={kirim.kode} onChangeText={x => setKirim({
                    ...kirim,
                    kode: x
                })} icon={false} />
                <MyGap jarak={20} />
                <MyInput label="Jumlah Masuk" value={kirim.masuk} onChangeText={x => setKirim({
                    ...kirim,
                    masuk: x
                })} keyboardType='number-pad' icon={false} />
                <MyGap jarak={20} />
                <MyInput label="Jumlah Keluar" value={kirim.keluar} onChangeText={x => setKirim({
                    ...kirim,
                    keluar: x
                })} keyboardType='number-pad' icon={false} />
                <MyGap jarak={20} />
                <MyButton title="Simpan" onPress={sendData} />



            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})