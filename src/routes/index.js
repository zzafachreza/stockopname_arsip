import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  Register,
  Account,
  AccountEdit,
  Konten,
  TanyaJawab,
  Notifikasi,
  Artikel,
  ArtikelDetail,
  Video,
  VideoDetail,
  Resep,
  ResepDetail,
  AsupanMpasi,
  AsupanAsi,
  StatusGizi,
  StatusGiziHasil,
  KursionerVark,
  GayaBelajarVisual,
  GayaBelajarAudio,
  GayaBelajarReading,


  GayaBelajarKinaesthetic,
  Diagnosa2,
  Periksagigimu,
  Gigilubang,
  TumpatanGigi,
  PaketUmrah,
  Pendaftaran,
  UpdateSeat,
  Pembayaran,
  Saldoku,
  DataJamaah,
  DataJamaah2,
  Royalti,
  Maps,
  FormulirEdit,
  Stok,
  StokAdd,
  StokDetail,
  StokEdit,
  Arsip,
  ArsipDetail,
  ArsipAdd,
  ArsipEdit,


} from '../pages';
import { colors } from '../utils';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';
import Diagnosa from '../pages/Diagnosa';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator initialRouteName='Produk' tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="Stok"
        component={Stok}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="StokAdd"
        component={StokAdd}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="StokDetail"
        component={StokDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="StokEdit"
        component={StokEdit}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Arsip"
        component={Arsip}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ArsipDetail"
        component={ArsipDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ArsipAdd"
        component={ArsipAdd}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ArsipEdit"
        component={ArsipEdit}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          // headerTitle: 'Detail',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          headerTitle: 'Daftar Pengguna',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Maps"
        component={Maps}
        options={{
          headerShown: false,

        }}
      />



      <Stack.Screen
        name="Pendaftaran"
        component={Pendaftaran}
        options={{
          headerShown: false,

        }}
      />


      <Stack.Screen
        name="UpdateSeat"
        component={UpdateSeat}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="Pembayaran"
        component={Pembayaran}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="Saldoku"
        component={Saldoku}
        options={{
          headerShown: false,

        }}
      />


      <Stack.Screen
        name="FormulirEdit"
        component={FormulirEdit}
        options={{
          headerShown: false,

        }}
      />
      <Stack.Screen
        name="Datajamaah"
        component={DataJamaah}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="DataJamaahDetail"
        component={DataJamaah2}
        options={{
          headerShown: false,

        }}
      />



      <Stack.Screen
        name="BelajarVisualAudio"
        component={GayaBelajarAudio}
        options={{
          headerShown: false,

        }}
      />



      <Stack.Screen
        name="BelajarReading"
        component={GayaBelajarReading}
        options={{
          headerShown: false,

        }}
      />





      <Stack.Screen
        name="BelajarKinaesthetic"
        component={GayaBelajarKinaesthetic}
        options={{
          headerShown: false,

        }}
      />




      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,

        }}
      />
      <Stack.Screen
        name="AccountEdit"
        component={AccountEdit}
        options={{
          headerShown: false,
          headerTitle: 'Edit Profile',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />


      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Royalti"
        component={Royalti}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ArtikelDetail"
        component={ArtikelDetail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Video"
        component={Video}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="VideoDetail"
        component={VideoDetail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Resep"
        component={Resep}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="ResepDetail"
        component={ResepDetail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="AsupanMpasi"
        component={AsupanMpasi}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="AsupanAsi"
        component={AsupanAsi}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="StatusGizi"
        component={StatusGizi}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="StatusGiziHasil"
        component={StatusGiziHasil}
        options={{
          headerShown: false,
        }}
      />















    </Stack.Navigator>
  );
}
