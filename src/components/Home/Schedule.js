import {schedule} from '../../data/schedule'

const Schedule = () => {

 const events = schedule.filter((event) => event.date )

 const currentDate = new Date();

 events.forEach(event => {
  event.dateISO = new Date(event.date);
  event.difference = Math.abs(event.dateISO - currentDate);
  
 })
  events.sort((a,b) => a.difference - b.difference);

 const currentEvents = events.slice(0, 3)


    return (
      <div className="col-lg-12 pt-2 bg-main px-0 my-4 rounded shadow">
        <h2 className="ms-3 fw-bold ">Upcoming Races</h2>
        <div className="row col-log-12 bg-white rounded-bottom m-0">
        
        {currentEvents.map((event, index) => (
            <div className="text-dark py-3 col-sm" key={`${event.name}-${index}`}>
              <div> 
                <div className="fw-bold fs-5">{event.date}</div> </div>
             <div> 
                <div>{event.track}</div>
                <div>{event.city}, {event.state}</div>
              </div>
             
           </div>
          ))}
            
  
        </div>
      </div>
    );
  };

  
  export default Schedule;