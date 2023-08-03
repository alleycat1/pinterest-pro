import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, Image, Keyboard, PermissionsAndroid, ScrollView, Text, TextInput, View } from 'react-native'
import * as Progress from 'react-native-progress'
import SelectDropdown from 'react-native-select-dropdown'
import RNFetchBlob from 'rn-fetch-blob'

import Clipboard from '@react-native-clipboard/clipboard'
import { TouchableOpacity } from 'react-native'
import { getProgress, initializeVideo } from '../../api/download/getVideo'
import { DOWNLOAD_SUB_URL, DOWNLOAD_URL_LIST } from '../../config/key'
import { Colors } from '../../constants'
import { horizontalScale, verticalScale } from '../../helpers/Layout'
import { RootNavigationProp } from '../../types/Navigation'
import { videoMetaInfo } from '../../types/Video'
import styles from './Styles'
import RNFS from 'react-native-fs';

export const Download = () => {

    const navigation = useNavigation<RootNavigationProp>();

    const fileTypes = [
        {
            content: 'MP4 - 360p',
            value: '360'
        },
        {
            content: 'MP4 - 480p',
            value: '480'
        },
        {
            content: 'MP4 - 720p',
            value: '720'
        },
        {
            content: 'MP4 - 1080p',
            value: '1080'
        },
        {
            content: 'MP4 - 1440p',
            value: '1440'
        },
        {
            content: 'WEBM - 4K',
            value: '4k'
        },
        {
            content: 'WEBM - 8K',
            value: '8k'
        },
    ]

    //  'https://www.w3schools.com/tags/movie.mp4'
    // 'https://www.youtube.com/watch?v=kvN5_GXlg2Y'

    const [progressValue, setProgressValue] = useState<number>(0);
    const [initializeUri, setInitializeUri] = useState<string>('');
    const [typeIndex, setTypeIndex] = useState<number>(0);
    const [downloadUri, setDownloadUri] = useState<string>('');
    const [videoInfo, setVideoInfo] = useState<videoMetaInfo>();
    const [isConverting, setIsConverting] = useState<boolean>(false);
    const [isDownloading, setIsDownloading] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isCompleted, setIsCompleted] = useState<boolean>(false);

    const intervalRequest = useRef<NodeJS.Timeout>()

    const downloadMedia = async () => {
        clearInterval(intervalRequest.current);
        setProgressValue(0);
        setIsDownloading(true);
        const { dirs } = RNFetchBlob.fs;
        const fileName = videoInfo ? encodeURIComponent(videoInfo.title) : 'pinterestMovie';
        const folderPath = await AsyncStorage.getItem(DOWNLOAD_SUB_URL);
        const path = `${folderPath ? (RNFS.ExternalStorageDirectoryPath + '/' + folderPath) : dirs.DownloadDir}/${fileName}`;
        try {
            const res = await RNFetchBlob.config({
                fileCache: true,
                path
            })
                .fetch('GET', downloadUri)
                .progress((received: number, total: number) => {
                    const percentage = Math.floor((received / total) * 1000);
                    setProgressValue(percentage);
                })
            if (res) {
                setProgressValue(1000);
                setIsDownloading(false);
                setIsCompleted(true);
                saveUri(downloadUri, videoInfo?.image);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    const convertMedia = async () => {
        Keyboard.dismiss();
        setIsLoading(true);
        setIsCompleted(false);
        setVideoInfo(undefined);
        setProgressValue(0);
        clearInterval(intervalRequest.current);
        const initializeDate = await initializeVideo({
            format: fileTypes[typeIndex].value,
            url: initializeUri,
            api: 'dfcb6d76f2f6a9894gjkewrwerewvv'
        })
        if (initializeDate) {
            setVideoInfo(initializeDate.data.info);
            setIsConverting(true);
            setIsLoading(false);
        }
        intervalRequest.current = setInterval(async () => {
            const progressData = await getProgress({
                id: initializeDate.data.id
            })
            setProgressValue(progressData.data.progress)
            if (progressData.data.success) {
                setDownloadUri(progressData.data.download_url)
                clearInterval(intervalRequest.current);
                setIsConverting(false);
            }
        }, 500)
    }

    const saveUri = async (uri: string, imageUri: string | undefined) => {
        let data = await AsyncStorage.getItem(DOWNLOAD_URL_LIST);
        let list;
        if (data == null) list = [];
        else
            list = JSON.parse(data);
        list.push({ uri, imageUri });
        await AsyncStorage.setItem(
            DOWNLOAD_URL_LIST,
            JSON.stringify(list),
        )
    }

    const pastUri = async () => {
        const pastContent = await Clipboard.getString();
        if (pastContent) {
            setInitializeUri(pastContent);
        }
    }

    const checkPermission = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: 'Permission to save files',
                message: 'This app needs permission to save files to your device.',
                buttonPositive: 'OK',
            },
        );
        console.log(granted);
    }

    useEffect(() => {
        checkPermission();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.rowCenter}>
                    <Image
                        source={require('../../assets/images/common/logo.png')}
                        style={styles.logoImage}
                    />
                    <Text style={styles.headerText}>
                        {'Pindown'}
                    </Text>
                </View>
                <View style={styles.rowCenter}>
                    <TouchableOpacity style={styles.circleContainer} onPress={() => navigation.navigate("DownloadList")}>
                        <Image
                            source={require('../../assets/images/common/download.png')}
                            style={{
                                width: verticalScale(24),
                                height: verticalScale(24)
                            }}
                        />
                    </TouchableOpacity>
                    <View style={{ width: horizontalScale(8) }}></View>
                    <TouchableOpacity style={styles.circleContainer} onPress={() => navigation.navigate("Setting")}>
                        <Image
                            source={require('../../assets/images/common/setting.png')}
                            style={{
                                width: verticalScale(24),
                                height: verticalScale(24)
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={styles.body}>
                    <Text style={styles.bodyText}>
                        {'Pindown'}
                    </Text>
                    <View style={styles.rowCenter}>
                        <Text style={[styles.bodyText, { color: Colors.red }]}>
                            {'Pinterest'}
                        </Text>
                        <Text style={styles.bodyText}>
                            {' Downloader'}
                        </Text>
                    </View>
                    <View style={styles.linkContainer}>
                        <View style={styles.rowCenter}>
                            <Image
                                source={require('../../assets/images/common/search.png')}
                                style={{
                                    width: verticalScale(24),
                                    height: verticalScale(24)
                                }}
                            />
                            <TextInput
                                style={styles.inputContainer}
                                placeholder='Past link here'
                                placeholderTextColor={Colors.black}
                                value={initializeUri}
                                onChangeText={setInitializeUri}
                            />
                        </View>
                        <TouchableOpacity onPress={pastUri} style={styles.pastButton}>
                            <Text style={styles.pastText}>
                                {'Paste'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <SelectDropdown
                        buttonStyle={styles.dropDownContainer}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem.content
                        }}
                        buttonTextStyle={styles.dropDownText}
                        data={fileTypes}
                        defaultValueByIndex={0}
                        dropdownStyle={styles.dropDownView}
                        onSelect={(selectedItem, index) => {
                            setTypeIndex(index);
                        }}
                        renderDropdownIcon={() => <Image
                            source={require('../../assets/images/common/arrowDown.png')}
                            style={{
                                width: verticalScale(24),
                                height: verticalScale(24)
                            }}
                        />
                        }
                        dropdownIconPosition={'right'}
                        rowTextForSelection={(item, index) => {
                            return item.content
                        }}
                        rowStyle={styles.dropDownItem}
                        rowTextStyle={styles.dropDownText}
                        selectedRowStyle={styles.selectedDropDownItem}
                        showsVerticalScrollIndicator={true}
                    />
                    <TouchableOpacity style={[styles.downloadButton, { opacity: (isLoading) ? 0.3 : 1 }]} disabled={isLoading} onPress={convertMedia}>
                        {isLoading ?
                            <ActivityIndicator size={'small'} color={Colors.gray} />
                            :
                            <Text style={styles.downloadButtonText}>
                                {'Download'}
                            </Text>
                        }
                    </TouchableOpacity>
                </View>
                {videoInfo && <View style={[styles.body, { marginTop: 17 }]}>
                    <View style={styles.downloadState}>
                        <Image
                            source={{ uri: videoInfo.image }}
                            style={styles.image}
                            resizeMode='cover'
                        />
                        <View style={{ marginLeft: horizontalScale(16) }}>
                            <Text style={styles.videoTitleText}>{videoInfo.title}</Text>
                            <Text style={styles.videoUrlText}>{downloadUri}</Text>
                        </View>
                    </View>
                    <View style={styles.downloadProgress}>
                        <View style={[styles.rowSpaceBetween, { marginBottom: 8 }]}>
                            <Text style={styles.stateText}>{isConverting ? 'Converting' : isDownloading ? 'Downloading' : isCompleted ? '' : 'Converted'}</Text>
                            <Text style={styles.progressText}>{Math.floor(progressValue / 10) + '%'}</Text>
                        </View>
                        <Progress.Bar
                            progress={progressValue / 1000}
                            height={4}
                            width={horizontalScale(267)}
                            borderWidth={0}
                            animated={false}
                            useNativeDriver={true}
                            color={Colors.red}
                            unfilledColor={Colors.mercury}
                        />
                    </View>
                    <TouchableOpacity
                        disabled={isConverting || isDownloading || isCompleted}
                        style={[styles.downloadButton, { opacity: (isConverting || isDownloading) ? 0.3 : 1 }]}
                        onPress={downloadMedia}
                    >
                        <Text style={[styles.downloadButtonText, { color: (isConverting || isDownloading) ? Colors.dark : Colors.white }]}>
                            {isCompleted ? 'Download Completed' : 'Download'}
                        </Text>
                    </TouchableOpacity>
                </View>}
                {videoInfo && <View style={[styles.body, { marginTop: 17 }]}>
                    <View style={styles.downloadState}>
                        <Image
                            source={{ uri: videoInfo.image }}
                            style={styles.image}
                            resizeMode='cover'
                        />
                        <View style={{ marginLeft: horizontalScale(16) }}>
                            <Text style={styles.videoTitleText}>{videoInfo.title}</Text>
                            <Text style={styles.videoUrlText}>{downloadUri}</Text>
                        </View>
                    </View>
                    <View style={styles.downloadProgress}>
                        <View style={[styles.rowSpaceBetween, { marginBottom: 8 }]}>
                            <Text style={styles.stateText}>{isConverting ? 'Converting' : isDownloading ? 'Downloading' : isCompleted ? '' : 'Converted'}</Text>
                            <Text style={styles.progressText}>{Math.floor(progressValue / 10) + '%'}</Text>
                        </View>
                        <Progress.Bar
                            progress={progressValue / 1000}
                            height={4}
                            width={horizontalScale(267)}
                            borderWidth={0}
                            animated={false}
                            useNativeDriver={true}
                            color={Colors.red}
                            unfilledColor={Colors.mercury}
                        />
                    </View>
                    <TouchableOpacity
                        disabled={isConverting || isDownloading || isCompleted}
                        style={[styles.downloadButton, { opacity: (isConverting || isDownloading) ? 0.3 : 1 }]}
                        onPress={downloadMedia}
                    >
                        <Text style={[styles.downloadButtonText, { color: (isConverting || isDownloading) ? Colors.dark : Colors.white }]}>
                            {isCompleted ? 'Download Completed' : 'Download'}
                        </Text>
                    </TouchableOpacity>
                </View>}
            </ScrollView>
        </View>
    )
}
