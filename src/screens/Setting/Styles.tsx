import { StyleSheet } from 'react-native'
import { verticalScale, horizontalScale, moderateScale } from '../../helpers/Layout'
import { Colors, Spacing } from '../../constants'

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    main: {
        backgroundColor: Colors.brightSilver,
        flex: 1,
        marginTop: verticalScale(24)
    },
    destinationBody: {
        width: horizontalScale(331),
        marginHorizontal: horizontalScale(22),
        borderRadius: 30,
        backgroundColor: Colors.mercury,
        marginTop: verticalScale(25),
        paddingVertical: verticalScale(22),
        alignItems: 'center'
    },
    siteBody: {
        width: horizontalScale(331),
        marginHorizontal: horizontalScale(22),
        borderRadius: 30,
        backgroundColor: Colors.mercury,
        marginTop: verticalScale(17),
        paddingTop: verticalScale(35),
        paddingBottom: verticalScale(37),
        alignItems: 'center'
    },
    bodyText: {
        fontFamily: 'Urbanist-SemiBold',
        color: Colors.littleBlack,
        fontSize: moderateScale(14),
        lineHeight: verticalScale(21),
        width: horizontalScale(287)
    },
    siteText: {
        fontFamily: 'Urbanist-SemiBold',
        color: Colors.littleBlack,
        fontSize: moderateScale(14),
        lineHeight: verticalScale(21),
    },
    boxContainer: {
        width: horizontalScale(287),
        height: 54,
        borderRadius: 10,
        backgroundColor: Colors.white,
        marginTop: verticalScale(8),
        paddingHorizontal: horizontalScale(20),
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    pathText: {
        fontFamily:'Urbanist-SemiBold',
        fontSize: moderateScale(12),
        color: Colors.dark,
        letterSpacing: -0.24
    },
    openButton: {
        width: horizontalScale(287),
        height: 54,
        borderRadius: 10,
        marginTop: verticalScale(8),
        borderWidth: 1,
        borderColor: Colors.sky,
        alignItems: 'center',
        justifyContent: 'center'
    },
    openText: {
        color: Colors.sky,
        fontSize: moderateScale(14),
        fontFamily: 'Urbanist-Bold',
        letterSpacing: -0.28
    },
    filledButton: {
        width: horizontalScale(287),
        height: 54,
        backgroundColor: Colors.sky,
        borderRadius: 10,
        marginTop: verticalScale(8),
        alignItems: 'center',
        justifyContent: 'center'
    },
    skyText: {
        color: Colors.white,
        fontSize: moderateScale(14),
        fontFamily: 'Urbanist-Bold',
        letterSpacing: -0.28
    },
    versionText: {
        color: Colors.littleGray,
        fontSize: 12,
        fontFamily:  'Urbanist-Regular',
        letterSpacing: -0.24,
        lineHeight: verticalScale(18),
        marginTop: 16,
    }
})

export default styles
