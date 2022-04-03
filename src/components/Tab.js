import {useState} from "react";
import "./Tab.css"
import Museums from "./Museums";
import MuseumDetail from "./MuseumDetail";

const Tab = ({tab, tabName, museumDetail, onTabChange}) => {


    const renderContent = () => {
        if (tab === "museums"){
            return <Museums onTabChange={onTabChange}/>
        }else if(tab === "museumdetail"){
            return  <MuseumDetail museum={museumDetail} onTabChange={onTabChange}/>
        }
    }
    return (
        <div className="tab">
            <div className="title-bar d-flex align-items-center justify-content-center">
                <h1>{tabName}</h1>
            </div>

            <div className="divider"/>

            <div className="w-100">
                {renderContent()}

            </div>
        </div>
    );
}

export default Tab
