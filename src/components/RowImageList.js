import React, {useCallback} from 'react';
import {StyleSheet, View, Dimensions, Image, FlatList} from 'react-native';

const win = Dimensions.get('window');

const RowImageList = props => {
  const {items} = props;

  const renderItem = useCallback(({item}) => {
    // calculate image's aspect ratio
    const aspectRatio = item.width / item.height;

    return (
      <View style={styles.imageContainer}>
        <Image
          source={{uri: item.download_url}}
          style={{aspectRatio: aspectRatio, width: win.width}}
        />
      </View>
    );
  }, []);

  const keyExtractor = useCallback(item => item.id, []);

  return (
    <View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        initialNumToRender={4}
        removeClippedSubviews={true}
        windowSize={6}
        maxToRenderPerBatch={4}
      />
    </View>
  );
};

export default RowImageList;

const styles = StyleSheet.create({
  imageContainer: {
    marginVertical: 5,
  },
});
