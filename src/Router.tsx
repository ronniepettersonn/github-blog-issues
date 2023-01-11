import { Route, Routes } from 'react-router-dom'
import { DetailPost } from './pages/DetailPost'
import { Home } from './pages/Home'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/post/:id' element={<DetailPost />} />
        </Routes>
    )
}