// external import
import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'

// internal import
import store from './Store/store'


function App() {

  return (
    <div className="App">
      <Provider store={store}>
        
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

        <Outlet />
      </Provider>
    </div>
  )
}

export default App
