import { horizontalScale, verticalScale } from "../helpers/Layout"

const Spacing = {
  horizontal: {
    globalHorizontalPadding: horizontalScale(16),
    size07: horizontalScale(7),
    size10: horizontalScale(10),
    size12: horizontalScale(12),
    size16: horizontalScale(16),
    size20: horizontalScale(20),
    size24: horizontalScale(24),
    size28: horizontalScale(28),
    size32: horizontalScale(32),
    size4: horizontalScale(4),
    size40: horizontalScale(40),
    size48: horizontalScale(48),
    size56: horizontalScale(56),
    size6: horizontalScale(6),
    size8: horizontalScale(8),
  },
  vertical: {
    size12: verticalScale(12),
    size16: verticalScale(16),
    size2: verticalScale(2),
    size20: verticalScale(20),
    size24: verticalScale(24),
    size28: verticalScale(28),
    size32: verticalScale(32),
    size34: verticalScale(34),
    size4: verticalScale(4),
    size40: verticalScale(40),
    size42: verticalScale(42),
    size49: verticalScale(49),
    size56: verticalScale(56),
    size64: verticalScale(64),
    size72: verticalScale(72),
    size8: verticalScale(8),
    size88: verticalScale(88),
  },
} as const

export default Spacing
