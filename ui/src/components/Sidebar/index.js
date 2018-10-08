import React, { Component } from 'react';

class Sidebar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <ul class="sidebar navbar-nav">
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {/* <i class="fas fa-fw fa-folder"></i> */}
                        <span>Find Style</span>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="pagesDropdown">
                        <div class="form-group">
                            <label>Product ID</label>
                            <input class="form-control" placeholder="Enter ID" />
                        </div>
                        <div class="form-group">
                            <label>Brand</label>
                            <select className="form-control">
                                <option>Select Brand </option>
                                <option>Gap </option>
                                <option>Old Navy</option>
                            </select>
                        </div>
                        
                    </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="charts.html">
                        {/* <i class="fas fa-fw fa-chart-area"></i> */}
                        <span>Custom Search</span></a>
                    </li>
                </ul>
            </div>
         );
    }
}
 
export default Sidebar;