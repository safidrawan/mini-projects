import { useEffect, useState } from "react";
import FAQList from './components/FAQlist'
import "boxicons/css/boxicons.min.css";


function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode')
    return savedTheme ? JSON.parse(savedTheme) : false
   });

    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
    },[darkMode])

    const toggleDarkMode = ()=>{
        setDarkMode(!darkMode)
    }
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950'>
      <div className='container mx-auto py-12'>
        <header className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text'>FAQ Center</h1>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>Here You can find answers to frequently asked questions about TailwindCSS 4</p>
        </header>
      </div>
      <FAQList toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </div>
  )
}

export default App