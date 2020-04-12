import React from "react";
import "../Search/style.css";

function Search() {
    return (
        <div className="main">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/">Google Books</a>
            </nav>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Google Books Search</h1>
                    <p class="lead">Search for and Save Books of interest</p>
                </div>
            </div>

            <div className="row">
                <div className="searchInput">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">@example.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="res">
                    <ul className="nav justify-content-end">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                View <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="Project">
                                Save <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                    </ul>

                </div>
                <div className="res">
                    <ul className="nav justify-content-end">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                View <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="Project">
                                Save <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                    </ul>

                </div>

            </div>





        </div>
    );

}


export default Search;