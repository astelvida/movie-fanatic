import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import GenreButton from './GenreButton';
import { Spinner } from './common';
import * as actions from '../actions/movieActions';

class GenreSetup extends Component {
  componentWillMount() {
    this.props.getGenres();
  }

  componentWillReceiveProps(nextProps) {
    const { selectGenre, isFetching, byId, allIds } = nextProps;
    if (!isFetching) {
      allIds.forEach((id) => {
        selectGenre(byId[id].name, id);
      });
    }
  }

  genreClick(name, id) {
    Actions.byGenre({ name, id });
  }

  render() {
    const {
      mainContainer,
      headerContainer,
      headerText,
      genreContainer,
      randomButtonContainer,
      randomButton,
      randomButtonText
    } = styles;

    // TODO: show error message if applicable
    const { allIds, byId, isFetching } = this.props;

    if (isFetching) {
      return (<Spinner size="large" />);
    }

    return (
      <View style={mainContainer}>
        <View style={headerContainer}>
          <Text style={headerText}>I&apos;m in the mood for...</Text>
        </View>

        <ScrollView>
          <View style={genreContainer}>
            {allIds.map((id) =>
              <GenreButton
                name={byId[id].name}
                key={id}
                id={id}
                onPress={() => this.genreClick(byId[id].name, id)}
              />
            )}
          </View>
        </ScrollView>

        <View style={randomButtonContainer}>
          <TouchableOpacity style={randomButton}>
            <Text style={randomButtonText}>Pick a random movie</Text>
          </TouchableOpacity>
        </View>

      </View>
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

export default connect(mapStateToProps, actions)(GenreSetup);


const styles = {
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

  headerText: {
    color: '#eee',
    fontSize: 20,
  },

  genreContainer: {
    flex: 8,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    // backgroundColor: '#BDBDBD',
  },

  randomButtonContainer: {
    flex: 1,
    backgroundColor: '#cecece',
    // justifyContent: 'space-around',
    // alignItems: 'stretch',
    // margin: 10,
    // padding: 10,
  },

  randomButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#8E24AA',
  },

  randomButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  }

};
