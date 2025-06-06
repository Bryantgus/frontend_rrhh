import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AccountLayout from './layout/AccountLayout'

export default function router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<AccountLayout/>} />


        </Routes>
      </BrowserRouter>
    </>
  )
}
