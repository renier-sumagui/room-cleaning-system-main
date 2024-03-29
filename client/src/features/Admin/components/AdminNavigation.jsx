import styles from "../styles/AdminDashboard.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function AdminNavigation() {
    
    function isActive({ isActive, isPending }) {
        return isPending ? "pending" : isActive ? "active" : ""
    }

    function logout() {
        localStorage.removeItem("user");
    }

    return (
        <nav className={ styles.navigation }>
            <h1 className={ styles.systemTitle }>Room Cleaning System</h1>
            <ul className={ styles.navList }>
                <li><NavLink to="/admin/employees" className={ isActive }>Employees</NavLink></li>
                <li><NavLink to="/admin/rooms" className={ isActive }>Rooms</NavLink></li>
                <li><NavLink to="/admin/students" className={ isActive }>Students</NavLink></li>
                <li><NavLink to="/login" onClick={ logout } className={styles.danger}>Logout</NavLink></li>
            </ul>
        </nav>
    )
}