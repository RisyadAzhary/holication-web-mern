import React from "react";
import Fade from "react-reveal/Fade";
import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/images/icons/icon-cities.svg";
import IconTraveler from "assets/images/icons/icon-traveler.svg";
import IconTreasure from "assets/images/icons/icon-treasure.svg";

import Button from "elements/Button/index";

import formatNumber from "utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className='container pt-4'>
        <div className='row align-item-center'>
          <div className='col-auto pr-5' style={{ width: 530 }}>
            <h1 className=' font-weight-bold line-height-1 mb-3 text-secondary'>
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>
            <p
              className='mb-4 font-weight-light text-primary w-75'
              style={{ lineHeight: "170%" }}>
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className='btn px-5'
              hasShadow
              isPrimary
              onClick={showMostPicked}>
              Show Me Now
            </Button>
            {/* travelers */}
            <div className='row' style={{ marginTop: 80 }}>
              <div className='col-auto' style={{ marginRight: 35 }}>
                <img
                  width='36'
                  height='36'
                  src={IconTraveler}
                  alt={`${props.data.travelers} Travelers`}
                />
                <h6 className='mt-3'>
                  {formatNumber(props.data.travelers)}{" "}
                  <span className='text-teal font-weight-light'>Travelers</span>
                </h6>
              </div>
              {/* treasure */}
              <div className='col-auto' style={{ marginRight: 35 }}>
                <img
                  width='36'
                  height='36'
                  src={IconTreasure}
                  alt={`${props.data.treasures} Treasures`}
                />
                <h6 className='mt-3'>
                  {formatNumber(props.data.treasures)}{" "}
                  <span className='text-teal font-weight-light'>Treasures</span>
                </h6>
              </div>

              <div className='col-auto'>
                <img
                  width='36'
                  height='36'
                  src={IconCities}
                  alt={`${props.data.cities} Cities`}
                />
                <h6 className='mt-3'>
                  {formatNumber(props.data.cities)}{" "}
                  <span className='text-teal font-weight-light'>Cities</span>
                </h6>
              </div>
            </div>
          </div>

          <div className='col-6 pl-5'>
            <div style={{ width: 520, height: 410 }}>
              <img
                src={ImageHero}
                alt='room with pool'
                className='img-fluid position-absolute'
                style={{ margin: "-10px 0 0 -30px", zIndex: 1 }}
              />
              <img
                src={ImageHero_}
                alt='room with pool frame'
                className='img-fluid position-absolute'
                style={{ margin: "35px -15px -15px 10px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
