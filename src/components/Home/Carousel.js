import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Engine from '../../images/carousel.jpg'
import {news} from '../../data/news'
import { Link } from "react-router-dom";

function CarouselInterval() {
 

  const articles = news.filter((article) => article.date )

  const currentDate = new Date();

  articles.forEach(article => {
  articles.dateISO = new Date(article.date);
  articles.difference = Math.abs(article.dateISO - currentDate);
  
  })
  articles.sort((a,b) => a.difference - b.difference);

  const currentaArticles = articles.slice(0, 3)

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  
  return (
    <div className='col-lg-8 px-0 mt-4 carousel shadow'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        {currentaArticles.map((article) => 
        
        (
          <Carousel.Item key={article.title} className='bg-white carousel-image rounded'>
          <img
              src={article.image}
              className="d-block mx-auto rounded w-100"
              style={{ objectFit: "cover" }}
              />
              <Carousel.Caption>
              <div className='bg-black bg-opacity-30 p-3 rounded'>
              <Link key={article.index} to={'/newsdetail'} state={{ data: article }} className='link-opacity-50-hover link-offset-2 link-underline-success'>
                <h3 className='text-white text-truncate'>{article.title}</h3>
                <p className='text-truncate text-white'>{article.detail}</p>
              </Link>
              </div>
              
              </Carousel.Caption>
          </Carousel.Item>
        ))}


        
        {/* <Carousel.Item>
        <img
            src={Engine}
            className="carousel-image"
            style={{ objectFit: "cover" }}
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img

            src={Engine}
            className="carousel-image"
            style={{ objectFit: "cover" }}
            />
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="carousel-image"
            src={Engine}
            alt="customer image"
            style={{ objectFit: "cover" }}
            />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item> */}
        </Carousel>
    </div>
  );
}

export default CarouselInterval;