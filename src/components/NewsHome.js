import {news} from '../data/news'
import { Link } from "react-router-dom";

const NewsHome = () => {


  const articles = news.filter((article) => article.date )

  const currentDate = new Date();

  articles.forEach(article => {
  articles.dateISO = new Date(article.date);
  articles.difference = Math.abs(article.dateISO - currentDate);
  
 })
 articles.sort((a,b) => a.difference - b.difference);

    return (
      <div className="container mt-4">
        <div className="row mb-2">
        {articles.map((article) => 
        
        (
          <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-main">
        <div className="col p-4 d-flex flex-column position-static text-white">
          
          <h3 className="mb-0 fw-bold">{article.title}</h3>
          <div className="mb-1 text-white">{article.date}</div>
          <p className="mb-auto hidden-text">{article.detail}</p>
          
          <Link to={'/newsdetail'} state={{ data: article }} className="icon-link gap-1 icon-link-hover stretched-link text-white">Continue Reading</Link>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img className="" width="200" height="250" src={article.image} />
        </div>
      </div>
    </div>
        ))}
         
    </div>
      </div>
    );
  };
  
  export default NewsHome;