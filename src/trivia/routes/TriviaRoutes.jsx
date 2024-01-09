import { Navigate, Route, Routes } from "react-router-dom"
import {MenuPage} from "../menu/pages/MenuPage.jsx";
import {QuestionsPage} from "../questions/pages/QuestionsPage.jsx";
import {MemoryPage} from "../memory/pages/MemoryPage.jsx";
import { SoupPage } from "../soup/pages/SoupPage.jsx";


export const TriviaRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <MenuPage/> }/>
            <Route path="/questions" element={ <QuestionsPage/> } />
            <Route path="/memory" element={ <MemoryPage/>}/>
            <Route path="/soup" element={ <SoupPage/>}/>
            <Route path="/*" element={ <Navigate to="/"/>} />
        </Routes>
    )
}
