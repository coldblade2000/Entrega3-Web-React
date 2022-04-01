import logo from './logo.svg';
import './App.css';
import Museums from "./components/Museums";
import {useState} from "react";
import Tab from "./components/Tab";

function App() {

    const [tab, setTab] = useState({tabID: "museums", tabName: "MUSEUMS"})
    const onTabChange = (tabID, tabName) => {
        setTab({tabID, tabName})
    }
    return (
        <div className="App">
            <header>
                <p className="title">Museos de arte moderno</p>
                <div className="d-inline">
                    <p className="header-tab active-header-tab">Museos</p>
                    <p className="header-tab">Artistas</p>
                    <p className="header-tab">Movimientos</p>
                </div>
            </header>
            <div className="px-5">
                <nav>
                    <p className="breadcrumbs">Home > Museos</p>
                </nav>
                <Tab tab={tab.tabID} tabName={tab.tabName} onTabChange={onTabChange}/>
            </div>
        </div>
    );
}

export default App;
