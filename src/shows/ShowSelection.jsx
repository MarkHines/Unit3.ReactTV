import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({show, setSelectedShow}) {
  return (
    <nav className="shows">
      <a class="show">{show.name}</a>
    </nav>
    
  );
}