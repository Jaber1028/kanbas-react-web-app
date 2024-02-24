import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./Profile";

function Account() {
    return (
        <div className="parent-container d-flex">
        <div style={{ flexGrow: 1 }}>
            <Routes>
                <Route path="/" element={<Navigate to="Profile" />} />
                <Route path="Profile/*" element={<Profile/>} />
            </Routes>
        </div>
        </div>
    );
    }
    export default Account;