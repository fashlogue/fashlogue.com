
import * as React from 'react';
import { Route } from 'react-router-dom';
import { HomeScreen } from '../screens/HomeScreen';

const routeList = [
  {
    component: HomeScreen,
    isModal: false,
    isExact: true,
    path: '/',
  },
  
  
];

export default class Routes extends React.Component {
  
  /**
   * Renders routes defined in the `routeList` params.
   *
   * @param {Array<IRoute>} routeList - List of routes.
   * @param {Object} props - Route props.
   *
   * @returns React.ReactNode
   */
  renderRoutes (
    routeList
  ) {
    return routeList.map((route, i) => (    
      <Route
        component={route.component}
        exact={route.isExact}
        key={i}
        path={route.path}
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