import React from 'react';
import './ContactUs.css';

function ContactUs() {
    return (
        <section id="Contact-us">
      <div className="row">
        <div className="col-md-6">
          Image
        </div>
        <div className="col-md-6" style={{ backgroundColor: "pink", padding: "1rem 2rem" }}>
          <form>
            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
            </div>

            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mobile Number" />
            </div>

            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
            </div>

            <div className="form-group">
              <textarea className="form-control" rows="3" placeholder="Type your message here...."></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </section>
    );
}

export default ContactUs;