import { createContext, useState, useEffect } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const currencySymbol = "TK";
    
    // State to manage appointments
    const [appointments, setAppointments] = useState([]);
    
    // State to manage user profile
    const [userData, setUserData] = useState({
        name: 'Edward Vincent',
        image: '',
        email: 'richardjameswape@gmail.com',
        phone: '+1 123 456 7890',
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Church Road, London',
        },
        gender: 'Male',
        dob: '2000-01-20',
    });
    
    // Load user data from localStorage on initial render
    useEffect(() => {
        const savedUserData = localStorage.getItem('userData');
        if (savedUserData) {
            setUserData(JSON.parse(savedUserData));
        }
    }, []);
    
    // Save user data to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(userData));
    }, [userData]);
    
    // Function to update user profile
    const updateUserData = (newData) => {
        setUserData(prev => ({
            ...prev,
            ...newData
        }));
    };
    
    // Function to add a new appointment
    const addAppointment = (appointment) => {
        setAppointments(prev => [...prev, appointment]);
    };
    
    // Function to cancel an appointment
    const cancelAppointment = (appointmentId) => {
        setAppointments(prev => prev.filter(app => app.id !== appointmentId));
    };
    
    const value = {
        doctors,
        currencySymbol,
        appointments,
        addAppointment,
        cancelAppointment,
        userData,
        updateUserData
    };
    
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;