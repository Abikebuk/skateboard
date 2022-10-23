import React, { Component } from 'react'


class Head extends Component {
    render () {
	return (
            <div className="header-area">
              <div className='head__flex'>
              <input className='head__search' type='text' value='Recherche'></input>
                <div className="col-md-6 col-sm-4 clearfix">
                  <ul className="notification-area pull-right">
                    <li id="full-view"><i className="ti-fullscreen"></i></li>
                    <li id="full-view-exit"><i className="ti-zoom-out"></i></li>
                    <li className="dropdown">
                      <i className="ti-bell dropdown-toggle" data-toggle="dropdown">
                        <span>2</span>
                      </i>
                      <div className="dropdown-menu bell-notify-box notify-box">
                        <span className="notify-title">Vous avez 1 notification</span>
                        <div className="nofity-list">
                            <div className="notify-thumb"><i className="ti-key btn-danger"></i></div>
                            <div className="notify-text">
                              <p>Nouveau devis</p>
                            </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
	)
    }    
}

export default Head
