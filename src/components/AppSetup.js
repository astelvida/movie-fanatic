import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import AppIntro from 'react-native-app-intro';

import GenreButton from './GenreButton';
import * as actions from '../actions/movieActions';


class AppSetup extends Component {
  componentWillMount() {
    
  }
  render() {
    const { allIds, byId, isFetching } = this.props;
    return (
      <AppIntro>
        <View style={[styles.slide, { backgroundColor: '#fa931d' }]}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>I&apos;m in the mood for...</Text>
          </View>
          <View style={styles.genreContainer}>
            {allIds.map((id) =>
              <GenreButton
                name={byId[id].name}
                key={id}
                id={id}
                onPress={() => this.genreClick(byId[id].name, id)}
              />
            )}
          </View>
        </View>
        <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
          <View level={-10}>
            <Text
              style={styles.text}>Page x
            </Text>
          </View>
        </View>

        <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>

        </View>
      </AppIntro>
    );
  }
}

const mapStateToProps = ({ genres }) => {
  const { allIds, byId, isFetching, error } = genres;
  return {
    allIds,
    byId,
    isFetching,
    error,
  };
};

export default connect(mapStateToProps, actions)(AppSetup);

// export default AppSetup;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  skipContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#8BC34A',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  headerContainer: {
    flex: 1,
    backgroundColor: '#8E24AA',
    justifyContent: 'center',
    alignItems: 'center'
  },
  genreContainer: {
    flex: 8,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#BDBDBD',
  },
  headerText: {
    color: '#eee',
    fontSize: 20,
  },

});
