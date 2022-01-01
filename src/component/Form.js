import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <div class='container py-5 g-5 mt-5 border rounded-3 bg-light'>
                 <form class='row needs-validation' novalidate>
                     <div class='col-6'>
                        <label for="firstName" class="form-label mt-3">First Name</label>
                        <input type="text" class="form-control" id="firstName" required/>
                        <div class="valid-feedback">Looks good!</div>
                     </div>

                     <div class='col-6'>
                        <label for="lastName" class="form-label mt-3">Last Name</label>
                        <input type="text" class="form-control" id="lastName" required/>
                        <div class="valid-feedback">Looks good!</div>
                     </div>

                     <div class="col-6">
                        <label for="inputEmail" class="form-label mt-3">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" required/>
                        <div class="valid-feedback">Looks good!</div>
                     </div>

                     <div class="col-6">
                        <label for="password" class="form-label mt-3">Password</label>
                        <input type="password" class="form-control" id="Password" required/>
                        <div class="invalid-feedback">Please Input a valid Password</div>
                     </div>

                     <div class='col-12'>
                        <label for="address" class="form-label mt-3">Address</label>
                        <input type="text" class="form-control" id="address" placeholder='124 John Street' required/>
                        <div class="valid-feedback">Looks good!</div>
                     </div>

                     <div class='col-6'>
                        <label for="cityInput" class="form-label mt-3">City</label>
                        <input type="text" class="form-control" id="cityInput" required/>
                        <div class="invalid-feedback">Please provide a valid city.</div>
                     </div>

                     <div class='col-6'>
                        <label for="inputState" class="form-label mt-3">State</label>
                        <select id="inputState" class="form-select" required>
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                        <div class="invalid-feedback">Please select a valid state.</div>
                     </div>

                     <div class='col-12'>
                        <div class="form-check mt-3 p">
                            <label><input type="checkbox" required/> Agree to terms and conditions</label>
                            <div class="invalid-feedback">Please select a valid state.</div>
                        </div>
                     </div>

                     <div class="col-12 pe-5">
                        <button class="btn btn-primary mt-4" type="submit">Submit form</button>
                     </div>
                 </form>
            </div>
        )
    }
}

export default Form

