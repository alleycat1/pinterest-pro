import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { Alert, Image, Linking, Text, TouchableOpacity, View } from 'react-native'
import DocumentPicker from 'react-native-document-picker'
import { PageHeader } from '../../Components/PageHeader'
import { DOWNLOAD_SUB_URL } from '../../config/key'
import { verticalScale } from '../../helpers/Layout'
import { RootNavigationProp } from '../../types/Navigation'
import styles from './Styles'

export const Setting = () => {

  const navigation = useNavigation<RootNavigationProp>()

  const [subDestination, setSubDestination] = useState<string>('');
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const url = 'https://en.loader.to/4/'

  const handleFolderSelection = async () => {
    try {
      const result = await DocumentPicker.pickDirectory();
      if (result) {
        const subDirPath = decodeURIComponent(result.uri).split(':').pop();
        if (subDirPath) {
          setSubDestination(subDirPath);
          setIsSaved(false);
        }
      }
    } catch (error) {
      console.log('Error picking folder:', error);
    }
  }

  const saveDestination = async () => {
    setIsSaved(true);
    await AsyncStorage.setItem(
      DOWNLOAD_SUB_URL,
      subDestination,
    )
  }

  const goSite = () => {
    Linking.canOpenURL(url).then(supported => {
      return Linking.openURL(url);
    }).catch(err => {
      Alert.alert(err);
    });
  }

  const getSubPath = async () => {
    const path = await AsyncStorage.getItem(DOWNLOAD_SUB_URL);
    if (path)
      setSubDestination(path);
  }

  useEffect(() => {
    getSubPath();
  }, [])

  return (
    <View style={styles.container}>
      <PageHeader title='Settings' onBack={() => navigation.goBack()} />
      <View style={styles.main}>
        <View style={styles.destinationBody}>
          <Text style={styles.bodyText}>
            {'File Destination'}
          </Text>
          <TouchableOpacity style={styles.boxContainer} onPress={handleFolderSelection}>
            <Text style={styles.pathText}>{subDestination}</Text>
            <Image
              source={require('../../assets/images/common/rightArrow.png')}
              style={{
                width: verticalScale(28),
                height: verticalScale(28)
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.openButton} onPress={handleFolderSelection}>
            <Text style={styles.openText}>
              {'Open'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filledButton} onPress={saveDestination} disabled={isSaved}>
            <Text style={styles.skyText}>
              {isSaved ? 'Saved' : 'Save'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.siteBody]}>
          <Text style={styles.siteText}>
            {'Visit Our WebSite'}
          </Text>
          <TouchableOpacity style={styles.filledButton} onPress={goSite}>
            <Text style={styles.skyText}>
              {'Loder.to'}
            </Text>
          </TouchableOpacity>
          <Text style={styles.versionText}>
            {'Version - 305.9.11'}
          </Text>
        </View>
      </View>
    </View>
  )
}
