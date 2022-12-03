import React from 'react'

function Register() {


  const submitFormData = () => {
    console.log("Ttt");
  }
  return (
    <form onSubmit={submitFormData}>
      <div className="form-group my-3">
        <label htmlFor="first-name">First Name</label>
        <input type="text" name="first-name" className="form-control" id="first-name" placeholder="Enter first-name" />
      </div>
      <div className="form-group my-3">
        <label htmlFor="last-name">Last Name</label>
        <input type="text" name="last-name" className="form-control" id="last-name" placeholder="Enter last-name" />
      </div>
      <div className="form-group my-3">
        <label htmlFor="age">Age</label>
        <input type="text" name="age" className="form-control" id="age" placeholder="Enter age" />
      </div>
      <div className="form-group my-3">
        <label htmlFor="Email">Email address</label>
        <input type="email" className="form-control" name='email' id="Email" placeholder="Enter email" />
      </div>
      <div className="form-group my-3">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" name='password' id="password" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-primary mt-4 mb-4">Register</button>
    </form>

  )
}

export default Register