import React from 'react'
import {BrowserRouter as Router ,Routes ,Route,Link} from "react-router-dom"
import AddBook from './components/AddBook'
import Delete from './components/Delete'
import UpdateBook from './components/UpdateBook'
import View from './components/View'
import SearchBook from './components/SearchBook'
import "./App.css"
const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <Link to ="/add">Addbook</Link>
          <Link to ="/update">Updatebook</Link>
          <Link to ="/search">Searchbook</Link>
          <Link to ="/view">Viewbook</Link>
          <Link to ="/delete">Deletebook</Link>
        </nav>
        <Routes>
          <Route path='/add' element={<AddBook/>}/>
          <Route path='/delete' element={<Delete/>}/>
          <Route path='/update' element={<UpdateBook/>}/>
          <Route path='/view' element={<View/>}/>
          <Route path='/search' element={<SearchBook/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App