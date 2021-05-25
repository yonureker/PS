/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  Button,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchImages} from './src/actions/imageActions';
import RowImageList from './src/components/RowImageList';
import MasonryImageList from './src/components/MasonryImageList';
import ToggleButton from './src/components/ToggleButton';

const App = () => {
  const [rowView, setRowView] = useState(true);
  const {error, loading, items} = useSelector(state => state.images);

  const toggleView = () => {
    setRowView(!rowView);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages());
  }, []);

  const renderImages = () => {
    if (error) {
      return (
        <View>
          <Text>{error.message}</Text>
          <Button title="Try Again" onPress={() => dispatch(fetchImages())} />
        </View>
      );
    }

    if (loading) {
      return <ActivityIndicator size="large" />;
    }

    if (items) {
      if (rowView) {
        return <RowImageList items={items} />;
      } else {
        return <MasonryImageList items={items} />;
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {renderImages()}
      <ToggleButton toggleView={toggleView} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
