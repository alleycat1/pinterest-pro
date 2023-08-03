import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { horizontalScale, verticalScale } from '../../helpers/Layout'
import styles from './Styles'
import { videoInfo } from '../../types/Video'
import Video from 'react-native-video';

export const VideoItem = (props: videoInfo) => {

    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isStarted, setIsStarted] = useState<boolean>(false);

    return (
        <View style={styles.itemBox}>
            <View style={styles.rowCenter}>

                {isStarted ?
                    <Video
                        source={{ uri: props.uri }}
                        style={styles.video}
                        resizeMode='cover'
                        controls={false}
                        paused={!isPlaying}
                    />
                    : <Image
                        source={{ uri: props.imageUri }}
                        style={styles.video}
                        resizeMode='cover'
                    />}
                <Text style={styles.videoUri}>
                    {props.uri}
                </Text>
            </View>
            <View style={styles.rowCenter}>
                <TouchableOpacity style={styles.controlButton} onPress={() => {
                    setIsStarted(false)
                    setIsPlaying(false)
                }}>
                    <Image
                        source={require('../../assets/images/common/folder.png')}
                        style={{
                            width: verticalScale(14),
                            height: verticalScale(14)
                        }}
                    />
                </TouchableOpacity>
                <View style={{ width: horizontalScale(8) }}></View>
                <TouchableOpacity style={styles.controlButton} onPress={() => {
                    if (!isPlaying && !isStarted) setIsStarted(true);
                    setIsPlaying(!isPlaying)
                }}>
                    <Image
                        source={isPlaying ? require('../../assets/images/common/skyPause.png') : require('../../assets/images/common/skyPlay.png')}
                        style={{
                            width: verticalScale(10.4),
                            height: verticalScale(11.2)
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
