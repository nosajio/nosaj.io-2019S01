import Front from "../Front";

export interface RoutesType {
  exact?: boolean;
  key: string;
  title?: string;
  path: string;
  component: React.ComponentType;
}

// The following routes will be mapped onto <Route /> components as props
const routes: RoutesType[] = [
  {
    exact: true,
    key: "hello-route",
    title: "Hello",
    path: "/",
    component: Front
  }
];

export default routes;
