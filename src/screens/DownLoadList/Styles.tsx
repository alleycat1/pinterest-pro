import { StyleSheet } from 'react-native'
import { verticalScale, horizontalScale, moderateScale } from '../../helpers/Layout'
import { Colors, Spacing } from '../../constants'

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    main: {
        flex: 1,
        backgroundColor: Colors.brightSilver,
        marginTop: verticalScale(24),
        alignItems: 'center',
        paddingTop: verticalScale(24)
    },
    videoText: {
        color: Colors.lightBlack,
        fontFamily: 'Urbanist-Bold',
        fontSize: moderateScale(14),
        lineHeight: verticalScale(17),
        width: horizontalScale(331),
        marginBottom: 8
    },
    itemBox: {
        width: horizontalScale(331),
        height: verticalScale(74),
        backgroundColor: Colors.white,
        borderRadius: 17,
        borderWidth: 1,
        borderColor: Colors.lightGray,
        paddingLeft: horizontalScale(8),
        paddingRight: horizontalScale(16),
        marginTop: verticalScale(8),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    video: {
        width: verticalScale(58),
        height: verticalScale(58),
        borderRadius: 10,
        backgroundColor: Colors.gray
    },
    videoUri: {
        color: Colors.lightBlack,
        fontSize: moderateScale(14),
        fontFamily: 'Urbanist-SemiBold',
        lineHeight: verticalScale(17),
        marginLeft: horizontalScale(8),
        paddingRight: horizontalScale(6),
        width: horizontalScale(180),
        height: verticalScale(17)
    },
    controlButton:{
        height: verticalScale(32),
        width: verticalScale(32),
        borderRadius: 32,
        backgroundColor: Colors.dark,
        justifyContent:'center',
        alignItems: 'center'
    },
    scrollContainer:{
        width: '100%',
    },
    scrollContent:{
        alignItems:'center',
        paddingBottom: verticalScale(20)
    }
})

export default styles
