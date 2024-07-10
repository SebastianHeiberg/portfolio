import React from "react";

function Footer() {
    return (
        <footer className="py-5 text-center">
        <p className="text-sm mt-2 opacity-50 text-custom-beige">&copy; {new Date().getFullYear()} Sebastian Heiberg</p>
        </footer> 
    );
    }

export default Footer;