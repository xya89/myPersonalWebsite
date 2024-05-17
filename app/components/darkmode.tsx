// Component to handle toggle darkmode / switchbackground
import { useState } from "react";
import { Navbar } from "./nav";

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        console.log('set darkmode');

        setDarkMode(!darkMode);
    }

    return (
        <div style={{ backgroundColor: darkMode ? '#000000' : '#ffffff' }}>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            {/* Other components and routes */}
        </div>
    )
}

