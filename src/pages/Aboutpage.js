// const Aboutpage = () => {
//     return (
//       <div className="about">
//         <h3 className="about__title">ABOUT PAGE</h3>
//         <div className="about__info">
//           <p>Tv Show Search App</p>
//           <div>
//             <p>Technologies used in the App:</p>
//             <ul>
//               <li>React (create-react-app)</li>
//               <li>CSS & HTML</li>
//               <li>Axios Ajax Request</li>
//               <li>TVMAZE API (https://www.tvmaze.com/api)</li>
//               <li>React Router</li>
//               <li>React Context API</li>
//               <li>Deploying to Netlify</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
import React, { useState, useEffect } from "react";

function Aboutpage() {
  const [actor, setActor] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/people?q=Mary`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setActor(data);
      });
  }, []);
 // console.log(actor);

  return (<div>
  {actor.map((person) =>(
    <div key={person.person.id}>
    <p >name: {person.person.name}</p>
    <p>Gender: {person.person.gender}</p>
    <p>Gender: {person.person.score}</p>
    <hr/>
    </div>
  ))}
  </div>
  );
}

  export default Aboutpage;