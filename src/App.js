import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/lib/persistStore";
import { store } from "store";
import { Tabs, Members, Favorites, SearchOptions } from "containers";
import { Pagination } from "components";

const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Tabs>
          <Members />
          <Favorites />
          <SearchOptions />
          <Pagination />
        </Tabs>
      </PersistGate>
    </Provider>
  );
};

export default App;
