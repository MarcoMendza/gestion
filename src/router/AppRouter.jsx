import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { CheckingAuth } from '../ui/components/index.js'
import { useCheckAuth } from '../hook/useCheckAuth'
import {TriviaRoutes} from "../journal/routes/TriviaRoutes.jsx";

export const AppRouter = () => {

  const status  = useCheckAuth();
  

  if( status === 'checking'){
    return <CheckingAuth/>
  }

  return (
    <Routes>

      {
        (status === 'authenticated')
        ? <Route path='/*' element={ <TriviaRoutes/> }/>
        : <Route path='/auth/*' element={ <AuthRoutes/> }/>
      }

      <Route path='/*' element={<Navigate to={'/auth/login'}/>}/>

    </Routes>
  )
}
