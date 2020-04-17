import React from "react";
import "../Search/style.css";
//import API from "../../utils";

function Search() {
    return (
        <div className="row">
            <div className="header">
                <div className="searchInput">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>




    );

}


export default Search;