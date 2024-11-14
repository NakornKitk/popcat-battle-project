import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from "./App"
import LeaderboardComponent from "./components/LeaderboardComponent"
import LoginComponent from "./components/LoginComponent"
import GameComponent from "./components/GameComponent"


const MyRoute = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/popcat-battle-project/" element={<App />}/>
                <Route path="/popcat-battle-project/login" element={<LoginComponent/>}/>
                <Route path="/popcat-battle-project/leaderboard" element={<LeaderboardComponent/>}/>
                <Route path="/popcat-battle-project/getuser/:slug" element={<GameComponent/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoute;