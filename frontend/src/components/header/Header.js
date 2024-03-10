import React from 'react'
import './header.css'

function Header() {
  return (
    <div>
        <nav class="navbar navbar-expand-md navbar-light">
            <div className='my_container container'>

  <a class="navbar-brand" href="#">
    <img src='./imgs/main_logo.jpg' />
  </a>

 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

 
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Profile</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Jobs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Resume</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
    </div>
  )
}

export default Header