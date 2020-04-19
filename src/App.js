import React, { useState, useEffect } from "react";
import { Images } from "./Images";

const url = "https://boiling-refuge-66454.herokuapp.com/images";
function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  console.log(images);
  return (
    <main className="wrapper">
      <div className="header">TEST APP</div>
      <Images images={images} />
      <div className="footer">© 2018-2019</div>
    </main>
  );
}

export default App;
