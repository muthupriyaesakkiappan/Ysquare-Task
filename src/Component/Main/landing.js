import React from "react";
import './landing.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faEnvelope,faLock} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Landing() {
    return (
      <>
       <div class="land text-light m-0 p-0">
                <nav class="navbar navbar-light bg-primary shadow sticky-top">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-3 ">
                        <h1 className="">Ysquare</h1>
                    </div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-2">
                        <form className="form-inline ">
                            <Link to="/Login"><button class="btn btn-primary my-2 my-sm-0" type="submit">LogIn</button></Link>
                            <Link to="/Register"><button class="btn btn-success my-2 my-sm-0 m-2" type="submit">SignUp</button></Link>
                        </form>
                    </div>
                </nav>
                <div>
                <img src="https://cdn.cbeditz.com/cbeditz/preview/studio-background-for-family-photo-11608302757afdort75y6.jpg" class="image"/>
            </div>
            </div>
     </>
  );
}
export default Landing;