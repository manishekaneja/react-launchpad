import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './redux';
import EntryScreen from './screens';

const App: FC<NoProps> = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <EntryScreen />
        </HashRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
