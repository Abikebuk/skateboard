import React from 'react'

const Log = () => {
  return (
    <div>
      <div className="login-area">
        <div className="container">
          <div className="login-box ptb--100">
            <form>
              <div className="login-form-head">
                <h4>Connection</h4>
                <p>Bonjour, Veuillez-vous connecter</p>
              </div>
              <div className="login-form-body">
                <div>
                  <label for="exampleInputEmail1">Adresse Mail</label>
                  <input type="text" id="identifier" label='Username' name='identifier' />
                  <i className="ti-email"></i>
                  <div className="text-danger"></div>
                </div>
                <div>
                  <label for="exampleInputPassword1">Mot de passe</label>
                  <input type="password" id="password" label='Password' name='password' />
                  <i className="ti-lock"></i>
                  <div className="text-danger"></div>
                </div>
                <div className="row mb-4 rmber-area">
                  <div className="col-6">
                    <div className="custom-control custom-checkbox mr-sm-2">
                      <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                      <label className="custom-control-label" for="customControlAutosizing">Se rappeler de moi</label>
                    </div>
                  </div>
                </div>
                <div className="submit-btn-area">
                  <button>Click Here</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Log
