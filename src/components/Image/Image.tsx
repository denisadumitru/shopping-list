import React from 'react';
import { View, Text, ImageProps as RNImageProps, Image as RNImage } from 'react-native';

import imageCollection from './ImageCollection';

interface ImageProps extends Omit<RNImageProps, 'source'> {
  source: keyof typeof imageCollection;
}

export default function Image({ source, ...rest }: ImageProps) {
  // console.log(imageCollection['Lime_Iconic.jpg']);
  return <RNImage {...rest} source={imageCollection[source]} />;
}
