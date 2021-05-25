import React, {useCallback} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';

const MasonryImageList = props => {
  const {items} = props;

  const renderItem = useCallback(({item}) => {
    // calculate image's aspect ratio
    const aspectRatio = item.width / item.height;

    return (
      <View key={item.id} style={styles.imageContainer}>
        <Image
          source={{uri: item.download_url}}
          style={{aspectRatio: aspectRatio}}
        />
      </View>
    );
  }, []);

  return (
    <MasonryList
      data={items}
      keyExtractor={item => item.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

export default MasonryImageList;

const styles = StyleSheet.create({
  imageContainer: {
    margin: 2.5,
  },
});
