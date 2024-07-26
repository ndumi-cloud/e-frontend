// import { Routes, Route } from "react-router-dom"
// import { Container } from "react-bootstrap"
// import { Home } from "./pages/Home"
// import { Store } from "./pages/Store"
// import { About } from "./pages/About"
// import { Navbar } from "./components/Navbar"
// import { ShoppingCartProvider } from "./context/ShoppingCartContext"

// function App() {
//   return (
//     <ShoppingCartProvider>
//       <Navbar />
//       <Container className="mb-4">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/store" element={<Store />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </Container>
//     </ShoppingCartProvider>
//   )
// }

// export default App


// src/App.tsx
import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import axios from "axios"

axios.defaults.baseURL = import.meta.env.VITE_API_URL || '/api';

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App