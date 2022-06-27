import {BrowserRouter, Routes, Route} from 'react-router-dom'
 
import Home from './pages/home'

export default function siteRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}