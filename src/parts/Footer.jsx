import React from "react";
import Button from "elements/Button";
import IconText from "parts/IconText";

export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-auto' style={{ width: 350 }}>
            <IconText />
            <p className='brand-tagline'>
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
          <div className='col-auto mr-5'>
            <h6 className='mt-2 list-title'>For Beginners</h6>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <Button type='link' href='/register'>
                  New Account
                </Button>
              </li>
              <li className='list-group-item'>
                <Button type='link' href='/properties'>
                  Start Booking a Room
                </Button>
              </li>
              <li className='list-group-item'>
                <Button type='link' href='/use-payment'>
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className='col-2 mr-5'>
            <h6 className='mt-2 list-title'>Explore Us</h6>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <Button type='link' href='/careers'>
                  Our Careers
                </Button>
              </li>
              <li className='list-group-item'>
                <Button type='link' href='/privacy'>
                  privacy
                </Button>
              </li>
              <li className='list-group-item'>
                <Button type='link' href='/terms'>
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className='col-3'>
            <h6 className='mt-2 list-title'>Connect Us</h6>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <Button
                  isExternal
                  type='link'
                  href='mailto:support@holication.id'>
                  support@holication.id
                </Button>
              </li>
              <li className='list-group-item'>
                <Button isExternal type='link' href='tel:+6221123123'>
                  021-123-123
                </Button>
              </li>
              <li className='list-group-item'>
                <span>Holication, Braga, Bandung</span>
              </li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col text-center copyrights'>
            Copyrights 2021 • All rights reseved • Holication
          </div>
        </div>
      </div>
    </footer>
  );
}
