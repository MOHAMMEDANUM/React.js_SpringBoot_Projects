import React, { useEffect } from 'react'

function Logout() {
  
    // Handle logout logic here
    useEffect(() => {
    localStorage.clear();
    window.location.href = '/'; // Redirect to home or login page after logout
    }, []);



}

export default Logout