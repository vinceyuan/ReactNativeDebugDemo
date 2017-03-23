import Home from './Home';
import SecondView from './SecondView';

export type Route = {
  key: string,
  component: Home | SecondView,
  title: string,
}
