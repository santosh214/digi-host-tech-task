import React from 'react';
import './navbar.css';
export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg  d-grid justify-content-center pt-5">
        <div class="container-fluid">
          <a class="navbar-brand pe-5" href="# ">
            E - Online
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Courses
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form class="d-flex ps-5" role="search">
              <button class="btn themeColor" type="submit">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
