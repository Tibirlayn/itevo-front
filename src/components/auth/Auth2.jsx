import React from 'react';
import { NavbarMain } from '../navbar/NavbarMain'
import { Footer } from '../footer/Footer';
import './css/Auth.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export function Auth() {
  return (
    <div className="App">
        <NavbarMain />


      <main className="container mt-5">
        <section className="login mb-5">

          <h2 className="text-center">WELCOME</h2>
          <form className="mx-auto" style={{maxWidth: '400px'}}>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" className="form-control" required />
            </div>
            <button type="submit" className="btn btn-primary btn-block">ENTER</button>
            <button type="button" className="btn btn-secondary btn-block">Sign up</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}