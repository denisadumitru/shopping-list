import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { Divider, Image, Text } from '@components';
import { useTheme } from '@hooks';

type SuggestionsListProps = {
  items: any[];
};

const SuggestionsList = ({ items }: SuggestionsListProps) => {
  const { sizes, colors, spacing } = useTheme();

  return (
    <View>
      <View style={styles.header}>
        <Text as="UPPERCASE" style={[styles.headerText, { color: colors.darkGrey }]}>
          Suggestions
        </Text>
        <Divider />
      </View>
      <FlatList
        data={items}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        style={styles.list}
        renderItem={({ item }) => (
          <View
            style={[
              styles.itemContainer,
              {
                borderRadius: sizes.borderRadius,
                backgroundColor: colors.white,
                padding: spacing.xs,
              },
            ]}
          >
            <Image style={[styles.image]} source={item.imgPath} resizeMode="center" />
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[styles.name, { color: colors.grey }]}
            >
              {item.title}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default SuggestionsList;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  headerText: {
    paddingRight: 8,
  },
  list: {
    flexGrow: 0,
    marginTop: 8,
  },
  itemContainer: {
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  image: {
    height: 80,
  },
  name: {
    textAlign: 'center',
    fontSize: 11,
    paddingBottom: 4,
  },
});
