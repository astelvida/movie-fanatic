import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';

import { Spinner, Button } from './common';
import * as actions from '../actions/movieActions';

class WelcomePage extends Component {
  componentWillMount() {
    this.props.getGenres();
    // check if user is authenticated to choose what to show:
      // show the app setup if user is first time using the App
      // else - move them directly to the page
  }

  componentDidMount() {
    // do anything while splash screen keeps, use await to wait for an async task.
  }

  componentWillReceiveProps(nextProps) {
    // depending on the props you want to show, show other props
  }


  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.text}>Welcome to movie Picker</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Actions.setup()}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
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

export default connect(mapStateToProps, actions)(WelcomePage);


// export default WelcomePage;


const styles = {
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    alignSelf: 'center',
    marginBottom: 15,
    fontSize: 20
  },
  button: {
    marginRight: 5,
    marginLeft: 5,
    padding: 10,
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: '#CDDC39',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
  }
};
