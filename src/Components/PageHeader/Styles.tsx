import { StyleSheet } from 'react-native'
import { verticalScale, horizontalScale, moderateScale } from '../../helpers/Layout'
import { Colors, Spacing } from '../../constants'

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingHorizontal: horizontalScale(22),
        justifyContent: 'space-between',
        alignItems:'center',
        marginTop: verticalScale(36)
    },
    headerText: {
        color: Colors.lightBlack,
        fontSize: moderateScale(18),
        fontFamily: 'Urbanist-SemiBold',
        lineHeight: moderateScale(24),
        letterSpacing: 0.36,
    },
    iconContainer: {
        width: verticalScale(41),
        height: verticalScale(41),
        borderWidth: 1,
        borderRadius: 12,
        borderColor: Colors.lightGray,
        backgroundColor: Colors.lightSilver,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: verticalScale(2)
    }
})

export default styles
