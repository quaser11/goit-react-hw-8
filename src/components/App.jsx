import Navigation from './Navigation/Navigation.jsx';
import {Routes, Route} from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage.jsx'
import SignUp from '../pages/SignUp/SignUp.jsx'
import LogIn from '../pages/LogIn/LogIn.jsx'
import ContactPage from '../pages/ContactPage/ContactPage.jsx'
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx'
import PublicRoute from './PublicRoute/PublicRoute.jsx'
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentUser} from "../redux/auth/operations.js";
import {useEffect} from 'react'
import {selectRefreshing, selectError} from "../redux/auth/selectors.js";
import toast, {Toaster} from 'react-hot-toast';

function App() {
    const dispatch = useDispatch();
    const refreshing = useSelector(selectRefreshing);
    const error = useSelector(selectError);
    useEffect(() => {
        dispatch(fetchCurrentUser())

        if (error) {
            toast.error(error);
        }

    }, [dispatch])

    return (
        <>
            {!refreshing && <Routes>
                <Route path="/" element={<Navigation/>}>
                    <Route index path="/" element={<PublicRoute><HomePage/></PublicRoute>}/>
                    <Route path='/contacts' element={<PrivateRoute><ContactPage/></PrivateRoute>}/>
                    <Route index path="/login" element={<PublicRoute restricted><LogIn/></PublicRoute>}/>
                    <Route path="/register" element={<PublicRoute restricted><SignUp/></PublicRoute>}/>
                </Route>
            </Routes>}
            <Toaster/>
        </>
    )
}

export default App
