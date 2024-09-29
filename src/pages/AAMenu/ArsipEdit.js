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
export default function ArsipEdit({ navigation, route }) {

    const [kirim, setKirim] = useState(route.params);

    const sendData = () => {

        if (
            kirim.surat_jalan.length == 0 ||
            kirim.nama_pt.length == 0 ||
            kirim.jenis.length == 0 ||
            kirim.kode.length == 0 ||
            kirim.jumlah.length == 0

        ) {
            Alert.alert(MYAPP, 'Formulir masih belum lengkap !')
        } else {
            Alert.alert(MYAPP, 'Apakah Anda yakin untuk simpan perubahan ?', [
                { text: 'TIdak' },
                {
                    text: 'Ya',

                    onPress: () => {
                        axios.post(apiURL + 'arsip_update', kirim).then(res => {
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
            <MyHeader judul="Pengiriman Barang Edit" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false} style={{
                padding: 20,
            }}>
                <MyInput value={kirim.surat_jalan} label="Surat Jalan" onChangeText={x => setKirim({
                    ...kirim,
                    surat_jalan: x
                })} icon={false} />
                <MyGap jarak={20} />
                <MyInput value={kirim.nama_pt} label="Nama PT" onChangeText={x => setKirim({
                    ...kirim,
                    nama_pt: x
                })} icon={false} />
                <MyGap jarak={20} />
                <MyCalendar label="Tanggal" value={kirim.tanggal} onDateChange={x => {
                    setKirim({
                        ...kirim,
                        tanggal: x
                    })
                }} />
                <MyGap jarak={20} />
                <MyInput value={kirim.jenis} label="Jenis" onChangeText={x => setKirim({
                    ...kirim,
                    jenis: x
                })} icon={false} />
                <MyGap jarak={20} />
                <MyInput value={kirim.kode} label="Kode" onChangeText={x => setKirim({
                    ...kirim,
                    kode: x
                })} icon={false} />
                <MyGap jarak={20} />
                <MyInput value={kirim.jumlah} label="Jumlah" onChangeText={x => setKirim({
                    ...kirim,
                    jumlah: x
                })} keyboardType='number-pad' icon={false} />
                <MyGap jarak={20} />
                <MyButton title="Simpan" onPress={sendData} />



            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})