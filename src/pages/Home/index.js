import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback, TouchableNativeFeedback, Linking } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { NavigationRouteContext, useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';
import moment from 'moment';
import 'moment/locale/id';
import MyCarouser from '../../components/MyCarouser';
import { Rating } from 'react-native-ratings';
import { MyGap, MyHeader } from '../../components';
import GetLocation from 'react-native-get-location';
import ProgressCircle from 'react-native-progress-circle'
export default function Home({ navigation, route }) {



  const [user, setUser] = useState({});
  const isFocus = useIsFocused();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [comp, setComp] = useState({});
  const [loading, setLoading] = useState(true);



  const _getTransaction = async () => {

    getData('user').then(u => {
      setUser(u);
      axios.post(apiURL + 'formulir', {
        fid_user: u.id
      }).then(res => {
        console.log(res.data);
        setData(res.data);
      })
    })




  }


  useEffect(() => {




    axios.post(apiURL + 'company').then(res => {

      setComp(res.data.data);

    });


    if (isFocus) {
      _getTransaction();
    }
  }, [isFocus]);

  const [lokasi, setLokasi] = useState({
    lat: 0,
    long: 0
  })




  return (

    <View style={{
      flex: 1,
      width: "100%",
      height: "100%",



    }}>

      {/* HEADERS */}
      <View style={{
        flexDirection: "row",
        backgroundColor: colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center'


      }}>

        <View>
          <Text style={{
            fontFamily: fonts.primary[800],
            color: colors.black,
            fontSize: 16,
          }}>Selamat datang,</Text>
          <Text style={{
            fontFamily: fonts.primary[400],
            fontSize: 16,
            color: colors.black,

          }}>
            {user.nama_lengkap}
          </Text>

        </View>



      </View>


      <View style={{
        flex: 1,
        backgroundColor: colors.white
      }}>
        <MyCarouser />

        <View style={{
          marginTop: 20,
          flexDirection: 'row',
        }}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Stok')}>
            <View style={{

              width: windowWidth / 2,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <View style={{
                backgroundColor: colors.primary,
                justifyContent: 'center',
                width: windowWidth / 3,
                height: windowWidth / 3,
                borderRadius: 20,
                alignItems: 'center'
              }}>
                <Image source={require('../../assets/a1.png')} style={{
                  width: 80,
                  height: 80,
                }} />
              </View>
              <Text style={{
                marginTop: 10,
                fontFamily: fonts.primary[600],
                fontSize: 12,
                color: colors.black,
                textAlign: 'center'
              }}>Stock Opname Barang</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Arsip')}>
            <View style={{

              width: windowWidth / 2,
              justifyContent: 'center',
              alignItems: 'center',

            }}>
              <View style={{
                backgroundColor: colors.primary,
                justifyContent: 'center',
                alignItems: 'center',
                width: windowWidth / 3,
                height: windowWidth / 3,
                borderRadius: 20,

              }}>
                <Image source={require('../../assets/a2.png')} style={{
                  width: 80,
                  height: 80,
                }} />

              </View>
              <Text style={{
                marginTop: 10,
                fontFamily: fonts.primary[600],
                fontSize: 12,
                color: colors.black,
                textAlign: 'center'
              }}>Arsip Pengiriman Barang</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  tulisan: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: fonts.secondary[600],
    color: colors.black,
    textAlign: 'justify'
  },
  tulisanJudul: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: fonts.secondary[800],
    color: colors.black,
    textAlign: 'justify'
  }
})