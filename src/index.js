import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


function App() {

  const url = 'https://randomuser.me/api';
  const [data, setData] = useState({});
  const [check, setCheck] = useState(true);

  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        // console.log(data);
      });
  }, [check]);

  return (
    <div>
      {(typeof data.results === 'undefined') ? (
        <div>
          <p>Data is loading...</p>
        </div>
      ) : (
        <div>
          <p>First Name: {data.results[0].name.first}</p>
          <p>Last Name: {data.results[0].name.last}</p>
          <p>Gender: {data.results[0].gender}</p>
          <p>Phone: {data.results[0].phone}</p>
          <p>Location: {data.results[0].location.city}, {data.results[0].location.country}</p>
          <p>Email: {data.results[0].email}</p>
          <img src={data.results[0].picture.large} alt="Image"/>
        </div>
      )}

      <h1>Check: { check ? 'True' : 'False' }</h1>
      <button onClick={() => {setCheck(check ? false : true)}}>NEXT</button>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
