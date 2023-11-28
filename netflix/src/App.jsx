import Navbar from "./components/Navbar"
import Pathes from "./config/Pathes"
import { AuthContextProvider } from "./context/AuthContext"

function App() {

  return (
    <>
    <AuthContextProvider>
      <Pathes />
    </AuthContextProvider>
    </>
  )
}

export default App
