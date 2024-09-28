import './App.css'
import ThemeProvider from './components/ThemeProvider/ThemeProvider'
import ThemeToggler from './components/ThemeToggler/ThemeToggler'
function App() {
  return (
    <>
    <ThemeProvider>
      <ThemeToggler></ThemeToggler>
    </ThemeProvider>
    </>
  )
}

export default App
