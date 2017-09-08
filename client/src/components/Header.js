import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
  return(
    <div>
        <div className="header text-center">ACTIVITY TRACKER</div>
        <div className="info-header text-center">Anshuman Bora | abora3@asu.edu</div>
        <div className="row home-links">

            <div className="col-md-3">

                <Link to={'/'} activeClassName="active"><h4>Home</h4></Link>

            </div>
            <div className="col-md-7"></div>

            <div className="col-md-2 text-right">

               <h4> <a href="https://stackoverflow.com/questions/tagged/java?sort=frequent&pageSize=15">Stack Overflow</a>
               </h4>
            </div>
        </div>


    </div>
  );
}

export default Header;
