import CaseStudy from '../CaseStudy';
import Front from '../Front';
import Services from '../Services';

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
    key: 'case-study-route',
    title: 'Case Study',
    path: '/w/:slug',
    component: CaseStudy
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
