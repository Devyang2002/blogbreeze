import logo from './logo.svg';
import './App.css';
import Navbar from './pages/global/Navbar';
import {Route, Routes} from 'react-router-dom'
import { ColorModeContext, useMode } from './themes';
import {CssBaseline, ThemeProvider} from '@mui/material'
import SideBar from './pages/global/SideBar';
import Home from './pages/home/Home';
import Blogs from './pages/blogs/Blogs';
import AddBlogs from './pages/blogs/AddBlogs';
import Login from './pages/login/Login';
import { UserProvider } from './UserContext';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <UserProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div className="app">
        <Navbar/>
      <main className="content">
      <SideBar/>
        <Routes>
          <Route path='/blogbreeze' element={<Home/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/addblog' element={<AddBlogs/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </main>
    </div>
    </ThemeProvider>
    </UserProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
