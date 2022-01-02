import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <div className='container py-5 g-5 mt-5 border rounded-3 bg-light'>
                 <form className='row needs-validation' novalidate>
                     <div className='col-6'>
                        <label for="firstName" className="form-label mt-3">First Name</label>
                        <input type="text" className="form-control" id="firstName" required/>
                        <div className="valid-feedback">Looks good!</div>
                     </div>

                     <div className='col-6'>
                        <label for="lastName" className="form-label mt-3">Last Name</label>
                        <input type="text" className="form-control" id="lastName" required/>
                        <div className="valid-feedback">Looks good!</div>
                     </div>

                     <div className="col-6">
                        <label for="inputEmail" className="form-label mt-3">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" required/>
                        <div className="valid-feedback">Looks good!</div>
                     </div>

                     <div className="col-6">
                        <label for="password" className="form-label mt-3">Password</label>
                        <input type="password" className="form-control" id="Password" required/>
                        <div className="invalid-feedback">Please Input a valid Password</div>
                     </div>

                     <div className='col-12'>
                        <label for="address" className="form-label mt-3">Address</label>
                        <input type="text" className="form-control" id="address" placeholder='124 John Street' required/>
                        <div className="valid-feedback">Looks good!</div>
                     </div>

                     <div className='col-6'>
                        <label for="cityInput" className="form-label mt-3">City</label>
                        <input type="text" className="form-control" id="cityInput" required/>
                        <div className="invalid-feedback">Please provide a valid city.</div>
                     </div>

                     <div className='col-6'>
                        <label for="inputState" className="form-label mt-3">State</label>
                        <select id="inputState" className="form-select" required>
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                        <div className="invalid-feedback">Please select a valid state.</div>
                     </div>

                     <div className='col-12'>
                        <div className="form-check mt-3 p-0">
                            <label><input type="checkbox" required/> Agree to terms and conditions</label>
                            <div className="invalid-feedback">Please select a valid state.</div>
                        </div>
                     </div>

                     <div className="col-12">
                        <button className="btn btn-primary mt-4" type="submit">Submit form</button>
                     </div>
                 </form>
            </div>
        )
    }
}

export default Form

