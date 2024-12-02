import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";

function App() {

  let [watchList, setWatchList] = useState([])

  let handleAddtoWatchList = (movieobj)=> {
    if (watchList.some((movie) => movie.id === movieobj.id)) {
      return;
    }
  
    let newWatchList = [...watchList, movieobj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
    setWatchList(newWatchList);

  }

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem('moviesApp');
    if (moviesFromLocalStorage) {
      setWatchList(JSON.parse(moviesFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('moviesApp', JSON.stringify(watchList));
  }, [watchList]);

let handleRemoveFromWatchList = (movieobj) => {
  let filteredWatchList = watchList.filter((movie)=> {
    return movie.id !== movieobj.id
  })

  setWatchList(filteredWatchList);
  localStorage.setItem('moviesApp', JSON.stringify(filteredWatchList));
}

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
  <Route
    path="/"
    element={
      <>
        <Banner />
        <Movies
          watchList={watchList}
          handleAddtoWatchList={handleAddtoWatchList}
          handleRemoveFromWatchList={handleRemoveFromWatchList}
        />
      </>
    }
  />
  <Route
    path="/watchlist"
    element={
      <WatchList
        watchList={watchList}
        setWatchList={setWatchList}
        handleRemoveFromWatchList={handleRemoveFromWatchList}
      />
    }
  />
</Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
