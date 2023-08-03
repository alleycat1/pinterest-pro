import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { verticalScale } from '../../helpers/Layout'
import styles from './Styles'

export type HeaderProps = {
    title: string
    onBack: () => void
}

export const PageHeader = (props: HeaderProps) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => props.onBack()}>
                <Image
                    source={require('../../assets/images/common/backArrow.png')}
                    style={{
                        width: verticalScale(19),
                        height: verticalScale(19)
                    }}
                />
            </TouchableOpacity>
            <Text style={styles.headerText}>{props.title}</Text>
            <View style={[styles.iconContainer, { opacity: 0 }]}>
            </View>
        </View>
    )
}
