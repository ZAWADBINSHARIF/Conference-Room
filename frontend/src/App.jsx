// external import
import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'

// internal import
import store from './Store/store'


function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Outlet />
      </Provider>
    </div>
  )
}

export default App
