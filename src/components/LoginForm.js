// class Component of LoginForm
import { Text } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button, InputField, Spinner } from './common';
import { loginUser, emailChanged, passwordChanged } from '../actions';


class LoginForm extends Component {
  renderButton() {
    const { email, password, loading } = this.props;
    if (loading === true) {
      return (<Spinner size="large" />);
    }
    return (
      <Button onPress={() => this.props.loginUser({ email, password })}>
        <Text>Sign in</Text>
      </Button>
    );
  }

  render() {
    const { email, password, error } = this.props;
    return (
      <Card>
        <CardSection>
          <InputField
            label={'Email'}
            value={email}
            placeholder={'user@email.com'}
            onChangeText={(text) => this.props.emailChanged(text)}
          />
        </CardSection>

        <CardSection>
          <InputField
            secureTextEntry
            label={'Password'}
            value={password}
            placeholder={'password'}
            onChangeText={(text) => this.props.passwordChanged(text)}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, loading, error } = auth;
  return { email, password, loading, error };
};


export default connect(mapStateToProps, { loginUser, emailChanged, passwordChanged })(LoginForm);

// 3 cardsections
// one will have a button - Login
