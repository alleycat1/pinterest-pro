import { StyleSheet } from 'react-native'
import { Colors } from '../../constants'
import { horizontalScale, moderateScale, verticalScale } from '../../helpers/Layout'

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: horizontalScale(22),
        justifyContent: 'space-between',
        marginTop: verticalScale(36)
    },
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    logoImage: {
        width: verticalScale(50), 
        height: verticalScale(50),
    },
    headerText: {
        color: Colors.dark,
        fontSize: moderateScale(20),
        fontFamily: 'Urbanist-Bold',
        letterSpacing: 0.1,
        marginLeft: horizontalScale(11)
    },
    bodyText: {
        color: Colors.dark,
        fontSize: moderateScale(36),
        fontFamily: 'Urbanist-Black',
        fontWeight: '900',
        letterSpacing: -0.9,
        lineHeight: verticalScale(45),
        textAlign: 'center'
    },
    circleContainer: {
        width: verticalScale(50),
        height: verticalScale(50),
        borderRadius: 50,
        borderWidth: 1,
        borderColor: Colors.silver,
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        width: horizontalScale(331),
        marginHorizontal: horizontalScale(22),
        borderRadius: 30,
        backgroundColor: Colors.mercury,
        marginTop: verticalScale(25),
        marginBottom: verticalScale(20),
        paddingVertical: verticalScale(22),
        alignItems: 'center'
    },
    linkContainer: {
        width: horizontalScale(299),
        borderRadius: 17,
        borderWidth: 6,
        borderColor: Colors.lightWhite,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: horizontalScale(12),
        paddingRight: horizontalScale(4),
        paddingVertical: verticalScale(4),
        backgroundColor: Colors.white,
        marginTop: verticalScale(32)
    },
    inputContainer: {
        minHeight: verticalScale(24),
        width: horizontalScale(141),
        marginLeft: horizontalScale(6),
        fontSize: moderateScale(14),
        fontFamily: 'Urbanist-Medium',
        letterSpacing: -0.3,
        color: Colors.black,
    },
    pastButton: {
        width: horizontalScale(90),
        height: verticalScale(46),
        backgroundColor: Colors.dark,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pastText: {
        fontSize: moderateScale(14),
        fontFamily: 'Urbanist-SemiBold',
        color: Colors.white,
        lineHeight: verticalScale(20),
    },
    dropDownContainer: {
        width: horizontalScale(287),
        height: verticalScale(54),
        borderRadius: 17,
        backgroundColor: Colors.white,
        marginTop: verticalScale(12),
        paddingLeft: 14,
        paddingRight: 10
    },
    dropDownView: {
        width: horizontalScale(287),
        borderRadius: 15,
        backgroundColor: Colors.white,
        marginTop: verticalScale(8)
    },
    dropDownText: {
        fontSize: moderateScale(14),
        fontFamily: 'Urbanist-Medium',
        letterSpacing: -0.3,
        textAlign: 'left',
        color: Colors.black,
        lineHeight: verticalScale(24),
    },
    dropDownItem: {
        justifyContent: 'flex-start',
        borderBottomColor: Colors.white,
        paddingLeft: 10
    },
    selectedDropDownItem: {
        backgroundColor: Colors.red,
        borderRadius: 15
    },
    downloadButton: {
        width: horizontalScale(287),
        height: verticalScale(54),
        borderRadius: 15,
        backgroundColor: Colors.red,
        marginTop: verticalScale(12),
        justifyContent: 'center',
        alignItems: 'center'
    },
    downloadButtonText: {
        fontSize: moderateScale(14),
        fontFamily: 'Urbanist-Bold',
        letterSpacing: -0.3,
        color: Colors.white,
    },
    downloadState: {
        width: horizontalScale(299),
        height: verticalScale(74),
        padding: verticalScale(8),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:Colors.white,
        borderRadius: 17
    },
    downloadProgress: {
        width: horizontalScale(299),
        height: verticalScale(74),
        padding: verticalScale(16),
        marginTop: verticalScale(12),
        backgroundColor:Colors.white,
        justifyContent:'center',
        borderRadius: 17
    },
    rowSpaceBetween:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%'
    },
    image:{
        width: verticalScale(58),
        height: verticalScale(58),
        borderRadius: 10,
        backgroundColor:Colors.gray
    },
    videoTitleText:{
        maxWidth: horizontalScale(200),
        height: 17,
        fontSize: moderateScale(14),
        lineHeight: moderateScale(17),
        fontFamily: 'Urbanist-SemiBold',
        color: Colors.black,
    },
    videoUrlText:{
        maxWidth: horizontalScale(200),
        height: 14,
        fontSize: moderateScale(12),
        lineHeight: moderateScale(14),
        fontFamily: 'Urbanist-Regular',
        color: Colors.lightBlack,
        marginTop: verticalScale(4)
    },
    stateText:{
        fontSize: moderateScale(12),
        lineHeight: moderateScale(14),
        fontFamily: 'Urbanist-SemiBold',
        color: Colors.black,
    },
    progressText:{
        fontSize: moderateScale(10),
        lineHeight: moderateScale(12),
        fontFamily: 'Urbanist-SemiBold',
        color: Colors.black,
    },
})

export default styles
