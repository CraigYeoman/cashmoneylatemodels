import {useLocation} from 'react-router-dom'

const NewsDetail = () => {
  const location = useLocation();
  

    console.log(location)
    if(!location.state || !location.state.data) {
      return <div>No data found</div>
    }

    const { data }  = location.state;


    return (
      <div className="container">
        <div className="row mt-5 bg-white h-100 align-items-center g-0 border rounded shadow-sm justify-content-center">
          <div className='col-lg-6 p-3 align-items-center  row'>
            <img src={data.image} className='mw-100'/>
          </div>
          <h1 className='px-5'>{data.title}</h1>
          <h3 className='px-5'>{data.date}</h3>
          <p className='px-5 pb-2'>{data.detail}</p>
        </div>
        

      </div>
    );
  };
  
  export default NewsDetail;