import React, { useState } from "react";
import "./css/App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Main from "./pages/Main";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";
import News from "./pages/News";
import Footer from "./components/Footer"



function App() {
  const [page,setPage] = useState("main")

  return (
      <BrowserRouter>
        <Header page={page}/>
        <Routes>
          <Route path="/" element={<Main setPage={setPage}/>}/>
          <Route path="/news" element={<News setPage={setPage}/>}/>
          <Route path="/post/:id" element={<PostPage setPage={setPage}/>}/>
          <Route path="/*" element={<h1>Ошибка 404</h1>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
