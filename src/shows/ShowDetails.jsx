import "./shows.css";



/** Allows users to browse through the episodes of the given show */
const ShowDetails = ({show}) => {
  const [selectedEpisode, setSelectedEpisode] = useState(tvShows);
  if (!show) {
    return <p>Please select a show</p>
  }
  return ( 
    <div className="show-details">
      <h2>{show.name}</h2>
    </div>
    );
}
 export default ShowDetails