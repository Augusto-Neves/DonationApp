import React from 'react';
import {useSelector} from 'react-redux';
import {AuthenticatedNavigation} from './authenticatedNavigation';
import {NoAuthenticatedNavigation} from './noAuthenticatedNavigation';

export function MainNavigation() {
  const user = useSelector(state => state.user);
  return user.isLoggedIn ? (
    <AuthenticatedNavigation />
  ) : (
    <NoAuthenticatedNavigation />
  );
}
