import { tvShows } from "./shows/data";
import { useState } from "react"
import ShowDetails from "./shows/ShowDetails";
import ShowSelection from "./shows/ShowSelection";

/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [selectedShow, setSelectedShow] = useState(tvShows)
  
  return (
    <>
      <header>
        <p>React TV</p>
        
        {
          tvShows.map((show) => {
            <ShowSelection name={show.name}/>
          })
        }
      </header>
      <main>
        <ShowDetails/>
        </main>
    </>
  );
}
