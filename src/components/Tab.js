import {useState} from "react";
import "./Tab.css"
import Museums from "./Museums";

const Tab = ({tab, tabName}) => {


    const renderContent = () => {
        if (tab === "museums"){
            return <Museums/>
        }
    }
    return (
        <div className="tab">
            <div className="title-bar d-flex align-items-center justify-content-center">
                <h1>{tabName}</h1>
            </div>

            <div className="divider"/>

            <div className="px-5">
                {renderContent()}

            </div>
        </div>
    );
}

export default Tab
