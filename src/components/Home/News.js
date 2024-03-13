import { Link } from "react-router-dom";
import {news} from '../../data/news'
import NewsDetail from "../NewsDetail";

const News = () => {

  const articles = news.filter((article) => article.date )

 const currentDate = new Date();

 articles.forEach(article => {
  articles.dateISO = new Date(article.date);
  articles.difference = Math.abs(article.dateISO - currentDate);
  
 })
 articles.sort((a,b) => a.difference - b.difference);

 const currentaArticles = articles.slice(0, 5)
 
    return (
      // <div className="col-lg-4 news-home my-3">
      //   <h2 className="fw-bold mb-0">News</h2>
      //   <div>
      //   <ul className="list-group list-group-flush">
      //   {currentaArticles.map((item) => (
            
      //       <li className="list-group-item" key={item.title}>
      //         <Link>{item.title}</Link>
              
      //         <p>{item.date}</p>
      //         <p className="text-break">{item.detail}</p>
      //       </li>
      //     ))}
            
      //   </ul> 
      //   </div>
      // </div>
      <div className="d-flex flex-column flex-md-row p-3 gap-4 py-md-5 align-items-center justify-content-center col-lg-4 news-home rounded shadow mt-4">
      <div className="list-group news-home-list rounded-0">
      {currentaArticles.map((item) => 
        
      (
        <Link key={item.index} to={'/newsdetail'} state={{ data: item }} className="list-group-item list-group-item-action d-flex gap-3 py-3" style={{height: 90}} aria-current="true">
        
        
        <div className="d-flex gap-2 w-100 flex-column justify-content-between">
          <div className="d-flex justify-content-between">
            <h5 className="mb-0 fw-bolder me-2">{item.title}</h5>
            <small className="opacity-50 text-nowrap">{item.date}</small>
          </div>
          
        </div>
      </Link>
      
      ))}
      </div>

    </div>
    );
  };

  
  export default News;
