import React from "react";
import './logout.css'
import { Link } from 'react-router-dom';
function Logout() {
 
        return (
      <>
       <div class="text-light m-0 p-0">
                <nav class="navbar navbar-light bg-primary shadow sticky-top">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-3 ">
                        <h1 className="">welcome</h1>
                    </div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-2">
                        <form className="form-inline ">
                            <Link to="/"><button class="btn btn-success my-2 my-sm-0 m-2" type="submit">Logout</button></Link>
                        </form>
                    </div>

                </nav>
            </div>
            <div>
                <img src="https://e1.pxfuel.com/desktop-wallpaper/742/75/desktop-wallpaper-nature-backgrounds-for-editing-backgrounds-nature.jpg" class="image"/>
            </div>
     </>
  );

}
export default Logout;