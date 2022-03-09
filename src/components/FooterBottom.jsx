import React from "react";

const FooterBottom = () => {
  return (
      <div class="end-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-6 align-items-center">
              <div class="powered">
                <p>
                  © 2022{" "}
                  <a className=" text-decoration-none text-dark" href="#">
                    <span className="fw-bolder text-strong">Variety Shop</span>
                  </a>{" "}
                  All rights reserved.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="payment">
                <ul class="list-unstyled list-inline ct-socials d-flex align-items-center justify-content-sm-start justify-content-lg-end">
                  <li >
                    <a 
                    ><i class="fab fa-cc-amex"></i></a>
                  </li>

                  <li className="ms-3">
                    <a
                    ><i class="fab fa-cc-mastercard"></i></a>
                  </li>

                  <li className="ms-3">
                    <a
                      aria-hidden="true"
                    ><i class="fab fa-cc-paypal"></i></a>
                  </li>

                  <li className="ms-3">
                  <i class="fab fa-cc-visa"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default FooterBottom;
