import Front from '../Front';
import Services from '../Services';
import TradespaceProject from '../Tradespace';

const exact = true;

export interface RoutesType {
  exact?: boolean;
  key: string;
  title?: string;
  path: string;
  component: React.ComponentType<any>;
}

// The following routes will be mapped onto <Route /> components as props
const routes: RoutesType[] = [
  {
    exact,
    key: 'hello-route',
    title: 'Hello',
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
    title: 'Services',
    path: '/services',
    component: Services
  }
];

export default routes;
