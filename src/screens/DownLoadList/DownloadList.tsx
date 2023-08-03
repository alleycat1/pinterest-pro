import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { PageHeader } from '../../Components/PageHeader'
import { VideoItem } from '../../Components/VideoItem'
import { DOWNLOAD_URL_LIST } from '../../config/key'
import { RootNavigationProp } from '../../types/Navigation'
import { videoInfo } from '../../types/Video'
import styles from './Styles'

export const DownloadList = () => {

  const navigation = useNavigation<RootNavigationProp>();

  const [downloadList, setDownloadList] = useState<videoInfo[]>([]);

  const getDownloadList = async () => {
    const data = await AsyncStorage.getItem(DOWNLOAD_URL_LIST);
    let list;
    if (data == null) list = [];
    else
      list = JSON.parse(data);
    setDownloadList(list);
  }

  useEffect(() => {
    getDownloadList();
  }, [])

  return (
    <View style={styles.container}>
      <PageHeader title='Download list' onBack={() => navigation.goBack()} />
      <View style={styles.main}>
        <Text style={styles.videoText}>{`${downloadList.length} Videos`}</Text>
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
          {downloadList.map((item: videoInfo, index) =>
            <VideoItem
              key={index}
              uri={item.uri}
              imageUri={item.imageUri}
            />
          )}
        </ScrollView>
      </View>
    </View>
  )
}
