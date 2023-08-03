import { moderateScale } from '../helpers/Layout'

const Typography = {
  b1: {
    fontFamily: 'Inter-SemiBold',
    fontSize: moderateScale(14),
    letterSpacing: -0.02 * moderateScale(14),
    lineHeight: moderateScale(20),
  },
  b2: {
    fontFamily: 'Inter-SemiBold',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
  },
  b3: {
    fontFamily: 'Inter-Medium',
    fontSize: moderateScale(24),
    letterSpacing: -0.02 * moderateScale(24),
    lineHeight: moderateScale(24),
  },
  b4: {
    fontFamily: 'Inter-Medium',
    fontSize: moderateScale(20),
    letterSpacing: -0.02 * moderateScale(20),
    lineHeight: moderateScale(24),
  },
  b5: {
    fontFamily: 'Inter-Medium',
    fontSize: moderateScale(20),
    letterSpacing: -0.02 * moderateScale(20),
    lineHeight: moderateScale(20),
  },
  c1: {
    fontFamily: 'Inter-Medium',
    fontSize: moderateScale(16),
    letterSpacing: -0.02 * moderateScale(16),
    lineHeight: moderateScale(20),
  },
  c2: {
    fontFamily: 'Inter-Medium',
    fontSize: moderateScale(16),
    letterSpacing: -0.02 * moderateScale(16),
  },
  c3: {
    fontFamily: 'Inter-Medium',
    fontSize: moderateScale(14),
    letterSpacing: -0.02 * moderateScale(14),
    lineHeight: moderateScale(20),
  },
  c4: {
    fontFamily: 'Inter-Medium',
    fontSize: moderateScale(14),
    letterSpacing: -0.02 * moderateScale(14),
    lineHeight: moderateScale(16),
  },
  h1: {
    fontFamily: 'BebasNeue-Regular',
    fontSize: moderateScale(56),
    letterSpacing: 0.01 * moderateScale(56),
    lineHeight: moderateScale(56),
  },
  h2: {
    fontFamily: 'BebasNeue-Regular',
    fontSize: moderateScale(40),
    letterSpacing: 0.01 * moderateScale(40),
    lineHeight: moderateScale(40),
  },
  h3: {
    fontFamily: 'BebasNeue-Regular',
    fontSize: moderateScale(40),
    letterSpacing: 0.01 * moderateScale(40),
    lineHeight: moderateScale(40),
  },
  h4: {
    fontFamily: 'BebasNeue-Regular',
    fontSize: moderateScale(32),
    letterSpacing: 0.01 * moderateScale(32),
    lineHeight: moderateScale(32),
  },
  n1: {
    fontFamily: 'Inter-Medium',
    fontSize: moderateScale(12),
    letterSpacing: 0.08 * moderateScale(12),
    lineHeight: moderateScale(20),
  },
  n2: {
    fontFamily: 'Inter-Medium',
    fontSize: moderateScale(11),
    letterSpacing: -0.02 * moderateScale(11),
    lineHeight: moderateScale(16),
  },
  n3: {
    fontFamily: 'Inter-Regular',
    fontSize: moderateScale(16),
    letterSpacing: -0.02 * moderateScale(16),
    lineHeight: moderateScale(24),
  },
  n4: {
    fontFamily: 'Inter-Regular',
    fontSize: moderateScale(14),
    letterSpacing: -0.02 * moderateScale(14),
    lineHeight: moderateScale(20),
  },
  t1: {
    fontFamily: 'Poppins-Medium',
    fontSize: moderateScale(15),
    lineHeight: moderateScale(16),
  },
  t2: {
    fontFamily: 'Poppins-Medium',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(16),
  },
  t3: {
    fontFamily: 'Poppins-Medium',
    fontSize: moderateScale(10),
    lineHeight: moderateScale(12),
  },
} as const

export default Typography
