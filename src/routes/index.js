
import * as React from 'react';
import { Route } from 'react-router-dom';
import { ModalRoute } from 'react-router-modal';
import { HomeScreen } from '../screens/HomeScreen';
import { AuthChoiceScreen } from '../screens/AuthChoiceScreen';

const baseModalProps = {
  inClassName: 'react-router-modal__modal-in',
  outClassName: 'react-router-modal__modal-out',
  backdropClassName: 'react-router-modal__backdrop',
  backdropInClassName: 'react-router-modal__backdrop-in',
  backdropOutClassName: 'react-router-modal__backdrop-out',
  outDelay: 500,
};

const routeList = [
  {
    component: HomeScreen,
    isModal: false,
    isExact: true,
    path: '/',
  },
  {
    component: AuthChoiceScreen,
    isModal: true,
    isExact: true,
    path: '*/app-auths',
  }
  
];

export default class Routes extends React.Component {
  
  constructor (props) {
    super(props);
  }
  /**
   * Renders routes defined in the `routeList` params.
   *
   * @param {Array<IRoute>} routeList - List of routes.
   * @param {Object} props - Route props.
   *
   * @returns React.ReactNode
   */
  renderRoutes (
    routeList,
    props,
  ) {
    return routeList.map((route, i) => (
      route.isModal ?
      <ModalRoute
        component={route.component}
        exact={route.isExact}
        key={i}
        parentPath={props.match.path}
        path={route.path}
        {...baseModalProps}
      /> :
      <Route
        component={route.component}
        exact={route.isExact}
        key={i}
        path={route.path}
        {...baseModalProps}
      />
    ));
  }

  render () {
    return (
      <Route render={(props) => {
        return (
          <div style={{
            width: '100%',
          }}>
            {this.renderRoutes(routeList, props)}
          </div>
        );
      }} />
    );
  }
}