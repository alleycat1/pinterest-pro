import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const screenWidth = width
const screenHeight = height
// these values are based on the design we have
const guidelineBaseWidth = 375
const guidelineBaseHeight = 812

const horizontalScale = (size: number): number =>
  Math.ceil((screenWidth / guidelineBaseWidth) * size)

const verticalScale = (size: number): number =>
  Math.ceil((screenHeight / guidelineBaseHeight) * size)

/**
 * Returns non-linear scale based on a resize factor (defaults to 0.51).
 * If normal horizontalScale will increase by +2X,
 * moderateScale will only increase it by +X.
 * @param size
 * @param factor
 */
const moderateScale = (size: number, factor: number = 0.51): number =>
  Math.ceil(size + (horizontalScale(size) - size) * factor)

export { horizontalScale, verticalScale, moderateScale, guidelineBaseWidth }
