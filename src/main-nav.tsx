'use client'

import { Link } from 'react-router-dom'
'use client'
import ThemeToggle from "./button/ThemeToggle"

export default function TopNav() {  
    return (
      <header className="shadow-md">
        <nav className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center">
            <Link to="/" className="mr-4">
              <Logo />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/workspace" className="nav-link">
                Workspace
            </Link>
            <Link to="https://ivorum.github.io/volts-documentation/" className="nav-link">
              Docs
            </Link>
            <ThemeToggle/>
          </div>
        </nav>
      </header>
    )
  }
  
  function Logo() {
    return (
      <svg
        viewBox="0 0 101 107"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16"
      >
        <path
          className="logo-header dark:fill-white fill-black"
          d="M3.60352 34.0723C2.72461 31.5527 2.02148 28.6523 1.49414 25.3711C0.966797 22.0898 0.703125 18.8965 0.703125 15.791C2.22656 11.4551 4.86328 7.85156 8.61328 4.98047C12.4219 2.10937 17.0801 0.673828 22.5879 0.673828C27.8613 0.673828 32.1094 2.34375 35.332 5.68359C38.6133 8.96484 41.5137 14.1211 44.0332 21.1523C46.6699 28.5352 48.8086 37.2656 50.4492 47.3438C52.0898 57.4219 53.2324 68.291 53.877 79.9512L56.4258 80.0391C59.0039 74.8828 61.2305 67.5293 63.1055 57.9785C64.9805 48.3691 65.9473 39.2578 66.0059 30.6445L55.0195 28.7109C54.2578 25.8398 53.7305 23.3203 53.4375 21.1523C53.1445 18.9258 52.998 16.4941 52.998 13.8574L53.0859 11.3965C54.1406 9.87305 55.8984 8.29102 58.3594 6.65039C60.8203 5.00977 63.75 3.63281 67.1484 2.51953C70.6055 1.40625 74.209 0.849609 77.959 0.849609C93.0762 0.849609 100.635 8.4375 100.635 23.6133C100.635 32.6367 99.0234 42.3047 95.8008 52.6172C92.5781 62.8711 87.9199 72.6562 81.8262 81.9727C75.791 91.2891 68.6719 98.9648 60.4688 105C57.5977 106.172 53.7012 106.758 48.7793 106.758C46.1426 106.758 43.1836 106.172 39.9023 105C36.6211 103.887 34.1895 102.715 32.6074 101.484L30.7617 95.332C26.543 81.0352 22.7344 68.7305 19.3359 58.418C15.9375 48.0469 12.832 40.3418 10.0195 35.3027L3.60352 34.0723Z"
        />
      </svg>
    )
  }
