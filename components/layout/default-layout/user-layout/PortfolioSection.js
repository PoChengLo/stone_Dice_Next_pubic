import React from 'react'
import Slider from 'react-slick'
import '@/styles/user-profile/portfolio-section.module.scss'

const PortfolioSection = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section id="portfolio-section" className="page-sections portfolio-section">
      <div className="container top-padding">
        <div className="row text-center">
          <div className="col-md-10 col-md-offset-1">
            <h2>My Portfolio</h2>
            <p>(swipe left or right to navigate.)</p>
            <div className="portfolio-slider">
              <Slider {...settings}>
                <div className="project-tile">
                  <a href="#">
                    <img
                      src="https://himigatliwanag.files.wordpress.com/2016/01/port1.jpg"
                      alt="Portfolio 1"
                    />
                  </a>
                </div>
                <div className="project-tile">
                  <a href="#">
                    <img
                      src="https://himigatliwanag.files.wordpress.com/2016/01/port2.jpg"
                      alt="Portfolio 2"
                    />
                  </a>
                </div>
                <div className="project-tile">
                  <a href="#">
                    <img
                      src="https://himigatliwanag.files.wordpress.com/2016/01/port3.jpg"
                      alt="Portfolio 3"
                    />
                  </a>
                </div>
                <div className="project-tile">
                  <a href="#">
                    <img
                      src="https://himigatliwanag.files.wordpress.com/2016/01/port4.jpg"
                      alt="Portfolio 4"
                    />
                  </a>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
