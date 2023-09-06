// import React, { useState } from 'react';

// function Predict() {

//     const [prediction, setPrediction] = useState([]);

//     const data = {
//         image: 'base64-encoded-image',
//         text: 'sample text'
//     };

//     const handlePredict = async () => {
//         try {
//             const response = await fetch('/api/predict', {
//                 method: 'POST',
//                 header: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(data)
//             })

//             if (response.ok) {
//                 const { prediction } = await response.json();
//                 setPrediction(prediction);
//             }
//             else {
//                 console.error('Error occurred during prediction');
//             }
//         }
//         catch (error) {
//             console.error('Error occurred during API request:', error);
//         }
//     }

//     return (
//         <div>
//             <button onClick={handlePredict}>Predict</button>
//             {prediction.length > 0 && (
//                 <div>
//                     <h2>Predictions:</h2>
//                     <ul>
//                         {prediction.map((prediction, index) => (
//                             <li key={index}>
//                                 Type: {prediction.type}, Points: {prediction.points}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// }
// export default Predict;





import React, { useState, useEffect } from 'react';

const ObjectStringComponent = () => {
  const [objectString, setObjectString] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8081/');
      const data = await response.json();

      // Extract the string values from the object
      const [x1, y1, x2, y2, object_type, probability] = data[0];

      // Create the string representation
      const extractedObjectString = `${x1}, ${y1}, ${x2}, ${y2}, ${object_type}, ${probability}`;

      setObjectString(extractedObjectString);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <p>Object String:</p>
      <p>{objectString}</p>
    </div>
  );
};

export default ObjectStringComponent;
