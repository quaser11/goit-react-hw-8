import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './components/App.jsx'
import {BrowserRouter} from "react-router-dom";
import {store, persistor} from './redux/store.js'
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App/>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </StrictMode>,
)
