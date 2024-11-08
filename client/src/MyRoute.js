import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from "./App"
import LeaderboardComponent from "./components/LeaderboardComponent"
import LoginComponent from "./components/LoginComponent"


const MyRoute = () => {
    return(
        <BrowserRouter basename="/popcat-battle-project">
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/login" element={<LoginComponent/>}/>
                <Route path="/leaderboard" element={<LeaderboardComponent/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoute;