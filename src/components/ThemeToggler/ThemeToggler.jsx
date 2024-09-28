import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../ThemeContext/ThemeContext'

export default function ThemeToggler() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    useEffect(() => {
        if(theme === 'light') {
            document.body.style.backgroundColor = '#fff'
            document.body.style.color = '#000'
        } else {
            document.body.style.backgroundColor = '#333'
            document.body.style.color = '#fff'
        }
    });
    return(
        <div>
            <p>Current theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}