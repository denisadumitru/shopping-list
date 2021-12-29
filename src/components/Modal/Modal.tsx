import React from 'react';
import {
  StyleSheet,
  View,
  Modal as RNModal,
  ModalProps as RNModalProps,
  Pressable,
} from 'react-native';

import { Button, Icon, Text } from '@components';
import { useTheme } from '@hooks';

interface ModalProps extends RNModalProps {
  title?: string;
  description?: string;
  mainActionText?: string;
  onMainActionClick?: () => void;
  secondaryActionText?: string;
  onSecondaryActionClick?: () => void;
  onCloseClick?: () => void;
}

const Modal = (props: ModalProps) => {
  const {
    title,
    description,
    mainActionText,
    onMainActionClick,
    secondaryActionText,
    onSecondaryActionClick,
    onCloseClick,
    ...rest
  } = props;

  const { spacing, colors, sizes } = useTheme();

  <Text as="H2" style={styles.modalText}>
    {title}
  </Text>;
  return (
    <View style={styles.centeredView}>
      <RNModal animationType="slide" transparent={true} {...rest}>
        <View style={styles.centeredView}>
          <View
            style={[
              styles.modalView,
              { backgroundColor: colors.white, borderRadius: sizes.borderRadius },
            ]}
          >
            <Pressable style={[styles.buttonClose]} onPress={onCloseClick}>
              <Icon name="close" color={colors.black} />
            </Pressable>
            {title && (
              <Text as="H2" style={styles.modalText}>
                {title}
              </Text>
            )}
            {description && <Text style={styles.modalText}>{description}</Text>}

            <View style={styles.actions}>
              {mainActionText && (
                <Button style={styles.button} onPress={onMainActionClick} text={mainActionText} />
              )}
              {secondaryActionText && (
                <Button
                  style={styles.button}
                  onPress={onSecondaryActionClick}
                  type="secondary"
                  text={secondaryActionText}
                />
              )}
            </View>
          </View>
        </View>
      </RNModal>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    position: 'relative',
    margin: 20,
    paddingVertical: 40,
    paddingHorizontal: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 16,
    textAlign: 'center',
  },
  actions: {
    alignSelf: 'stretch',
  },
  button: {
    marginTop: 12,
  },
});
