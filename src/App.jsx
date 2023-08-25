import Header from "./components/Header";
import { Outlet } from "react-router-dom";


const App = () => (
    <div className="app">
        <Header />
        <Outlet />
    </div>
)

export default App; 