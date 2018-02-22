import Home from './Home';
import ExampleCalculator from './ExampleCalculator';
import ExampleTouch from './ExampleTouch';

export type Route = {
  key: string,
  component: Home | ExampleCalculator | ExampleTouch,
  title: string,
};
