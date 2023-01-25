import React, {FC} from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import FastImage from 'react-native-fast-image';
import {GST} from '../../theme/globalStyles';
import {RF} from '../../theme/responsive';
import PropTypes, {InferProps} from 'prop-types';

// interface Props {
//   path: any;
//   uri: any;
//   resizeMode: 'contain' | 'center' | 'cover' | 'stretch';
//   size: number;
//   width: number;
//   percentWidth: number;
//   height: number;
//   percentHeight: number;
//   customStyle: any;
//   onPress: () => void;
//   tintColor: string;
//   containerStyle?: ViewStyle;
//   radius: any;
// }
const customImageProps = {
  path: PropTypes.any,
  uri: PropTypes.string,
  resizeMode: PropTypes.oneOf(['contain', 'center', 'cover', 'stretch']),
  size: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  customStyle: PropTypes.any,
  onPress: PropTypes.any,
  tintColor: PropTypes.string!,
  containerStyle: PropTypes.any,
  radius: PropTypes.any,
};
type props = InferProps<typeof customImageProps>;
const CustomImage: FC<props> = ({
  path,
  uri,
  resizeMode,
  size,
  width = 0,
  height = 0,
  customStyle,
  onPress,
  tintColor,
  containerStyle,
  radius,
}: props) => {
  return (
    <>
      <TouchableOpacity
        disabled={!onPress}
        onPress={onPress}
        hitSlop={GST.HITSLOP}
        style={containerStyle}>
        <FastImage
          source={uri ? {uri} : path}
          resizeMode={resizeMode}
          style={[
            {
              width: RF(size || width),
              height: RF(size || height),
              borderRadius: radius ? RF(radius) : 0,
            },
            customStyle,
          ]}
          tintColor={tintColor}
        />
      </TouchableOpacity>
    </>
  );
};
CustomImage.propTypes = customImageProps;
CustomImage.defaultProps = {
  // tintColor: 'white',
  resizeMode: null,
};
export default CustomImage;
