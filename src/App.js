import React, {useState} from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";
import AuthorDetail from "./AuthorDetail";

function App() {

  const [currentAuthor, setCurrentAuthor] = useState(null)
  const [_authors, setAuthors] = useState(authors)

  const selectAuthor = (author) => setCurrentAuthor(author)

  const setView = () => {
    if (currentAuthor) return <AuthorDetail author={currentAuthor}/>
    return <AuthorList authors={_authors} selectAuthor={selectAuthor} filterAuthors={filterAuthors}/>
  }

  const resetView = () => {
    setCurrentAuthor(null)
  }

  const filterAuthors = query => { 
    setAuthors(authors.filter(author => 
      author.first_name.toLowerCase().includes(query.toLowerCase()) || author.last_name.toLowerCase().includes(query.toLowerCase())
      ))
   }

  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar resetView={resetView}/>
        </div>
        <div className="content col-10">
          {setView()}
        </div>
      </div>
    </div>
  );
}

export default App;
