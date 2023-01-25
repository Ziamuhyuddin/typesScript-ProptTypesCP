import {StyleSheet} from 'react-native';
import {COLORS} from './colors';
import {RF} from './responsive';
import {SIZING} from './sizing';
import {SPACING} from './spacing';
const {DARK_RED, BLACK, COBALT, WHITE, LIGHT_GRAY, OVERLAY} = COLORS;

export const GST = StyleSheet.create({
  ...SPACING,
  ...SIZING,
  FLEX: {
    flex: 1,
  },
  ERROR: {
    marginTop: RF(4),
    fontSize: RF(10),
    color: DARK_RED,
    marginLeft: RF(15),
  },
  SHADOW: {
    shadowColor: COLORS.GRAY,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.09,
    shadowRadius: 4,
    elevation: 5,
  },
  SHADOW_LIGHT: {
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  SHADOW_HEAVY: {
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  SHADOW_DARK: {
    shadowColor: COLORS.BLACK_LIGHT,
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.58,
    shadowRadius: 20.0,
    elevation: 30,
  },
  HITSLOP: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
  DIVIDER: {
    borderBottomColor: COBALT,
    borderBottomWidth: 1,
  },
  MAINT_CONTAINER: {
    flex: 1,
    alignSelf: 'center',
    width: '80%',
  },
  CONTENT_CONTAINER: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  FLEX_ROW: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  BOTTOM_BTN_CONTANIER: {
    flex: 1,
    alignItems: 'center',
    marginBottom: RF(10),
  },
  TRIANGLE: {
    alignSelf: 'center',
    width: 0,
    height: 0,
    borderLeftWidth: RF(6),
    borderRightWidth: RF(6),
    borderTopWidth: RF(6),
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: WHITE,
  },
  SUBMIT_BTN_CONTAINER: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  HEADER_CONTAINER: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...SPACING.px4,
    ...SPACING.pt2,
    ...SPACING.pb4,
    borderBottomWidth: 1,
    borderBottomColor: LIGHT_GRAY,
  },
  FLEX5: {
    flex: 5,
  },
  COUPON_TAB_MAIN_CONTAINER: {
    marginTop: 0,
    backgroundColor: WHITE,
    ...SPACING.pt4,
    alignItems: 'center',
  },
  BOTTOM_MODAL: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    backgroundColor: OVERLAY,
  },
  HIDDEN: {
    display: 'none',
  },
  STICKY_PADDING: {
    paddingBottom: RF(110),
  },
  PHOTO_FRAME: {
    flex: 1 / 3,
  },
});
