import React from 'react'

const Navbar = ({setCategory}) => {
  const st={
    cursor:"pointer"
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg "  style={{'backgroundColor': 'black'}} data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>News</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link" style={st} onClick={()=>setCategory("business")}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" style={st} onClick={()=>setCategory("science")}>Science</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" style={st} onClick={()=>setCategory("entertainment")}>entertainment</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" style={st} onClick={()=>setCategory("sports")}>sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" style={st} onClick={()=>setCategory("health")}>health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" style={st} onClick={()=>setCategory("technology")}>technology</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
