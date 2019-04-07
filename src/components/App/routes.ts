import * as React from 'react';
import Error from '../Error';
import Services from '../Services';
import TradespaceProject from '../Tradespace';
import { FrontAB } from './Experiments';

const exact = true;

export interface RoutesType {
  exact?: boolean;
  key: string;
  title?: string;
  path?: string;
  component: React.ComponentType<any> | React.FunctionComponent<any>;
}

// The following routes will be mapped onto <Route /> components as props
const routes: RoutesType[] = [
  {
    exact,
    key: 'front-route',
    title: 'Jason helps startups ship great web products',
    path: '/',
    component: FrontAB
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
    key: 'blog-route',
    title: 'Nosaj Blog',
    path: '/r/*',
    component: () =>
      React.createElement(Error, {
        code: 'Back Soon',
        message:
          'My blog is temporarily under maintenance while I refresh my website and its architecture. Please check back in a few days to see the new blog!',
        links: [
          {
            label: 'Go to front page',
            href: '/'
          }
        ]
      })
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
