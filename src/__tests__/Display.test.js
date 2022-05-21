import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Display from '../components/Display';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Display />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
