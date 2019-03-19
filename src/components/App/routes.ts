import * as React from 'react';
import Front from '../Front';
import Services from '../Services';
import Error from '../Error';
import TradespaceProject from '../Tradespace';

const exact = true;

export interface RoutesType {
  exact?: boolean;
  key: string;
  title?: string;
  path?: string;
  component: React.ComponentType<any>;
}

// The following routes will be mapped onto <Route /> components as props
const routes: RoutesType[] = [
  {
    exact,
    key: 'front-route',
    title: 'Jason helps startups ship great web products',
    path: '/',
    component: Front
  },
  {
    exact,
    key: 'tradespace-route',
    title: 'Tradespace inc IP Platform Case Study',
    path: '/project/tradespace',
    component: TradespaceProject
  },
  {
    exact,
    key: 'services-route',
    title: 'I can help you make your next web application',
    path: '/services',
    component: Services
  },
  {
    key: 'error-404-route',
    title: '404 :(',
    component: () =>
      React.createElement(Error, {
        message:
          'This is unfortunate. The page you’re looking for isn’t here any more  :(',
        code: '404',
        links: [
          {
            label: 'Go to front page',
            href: '/'
          }
        ]
      })
  }
];

export default routes;
