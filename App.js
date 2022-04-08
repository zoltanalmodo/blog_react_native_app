import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';


const navigator = createStackNavigator({
  IndexScreen,
}, {
    initialRouteName: 'IndexScreen',
    defaultNavigationOptions: { title: 'Blogs', },
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
};
