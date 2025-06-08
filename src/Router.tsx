import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AccountLayout from './layout/AccountLayout'
import MainPageLayout from './layout/MainPageLayout'
import InicioView from './view/InicioView'

export default function router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<AccountLayout/>} />

          <Route path='/main' element={<MainPageLayout/>}>
             <Route path="inicio" element={<InicioView />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}
