/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
class Banner extends Component {
    render(){
        return(
            <div className="ban">
                <div className="banne">
                    
                    <img src="/img/360_F_264922838_NErJEovZiP9MTa49apqL1Vs3f88ZT8Dg.jpg"  alt="" width={"100%"}/>
        
                    </div>
                    
         <div className="banner-text">
          <h1 className="text-slanted text-capitalize mb-0">
            Minimalist
          </h1>
          <h1 className="text-lowercase font-weight-bold">
            interior style
          </h1>
          <Link to="browse" class="btn btn-outline-dark"> view collection </Link>
        </div> 
      </div>
           
            
        )
    }
}
export default Banner;