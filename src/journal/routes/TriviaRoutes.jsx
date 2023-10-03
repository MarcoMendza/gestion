import { Navigate, Route, Routes } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"
import TriviaPage from "../pages/TriviaPage.jsx";

export const TriviaRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <TriviaPage/> }/>

            <Route path="/*" element={ <Navigate to="/"/>} />
        </Routes>
    )
}
