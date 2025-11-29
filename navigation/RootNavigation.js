import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import { useSelector } from 'react-redux';
import { Authenticated, NonAuthenticated } from './mainNavigation';

const RootNavigation = () => {
  const user = useSelector(State => State.user);
  return user.isLoggedIn ? <Authenticated /> : <NonAuthenticated />;
};

export default RootNavigation;
