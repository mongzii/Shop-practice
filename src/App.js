import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import data from "./data";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhMQERAVERIWFhURGBYYFhoYFxcVFxUXGhUVFxUYHSghGholGxoVIjEiJSorMS4uFx81ODMvNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcEBQgBAwL/xABKEAABAwIDBQUDBggMBwAAAAABAAIDBBEFEiEGBzFBURMiYXGBMpGhFCNCUnLSM5KxssHR0/AVNENic4OToqOzwvEXU1VjdJTh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALoREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEWLV4lDEWsklYx7vZaXtDj5NJufRBlItDRbVQS1DadhDswdrmsRIzV0bo3AOHd1DuBsRoQt8gIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiKJY1vEoaaUQF7pXXs8xjMyMcy93hws258EEtUBxvedDDUNhjj7aMOLZZM1g0AgF0eUOzga9L20UB2y2vnqZ3xx1L3QNcS3JeNrmN1uQDci4+le4twvZQZ0z5XXOcC5u+xIzcDfrxOnl0QdGU+3dGXOD6qla0Ws4TOI1+u50bWs9XKObUbByVtf27KgMpZmNe6QEPdmaAzJEOFi0B19QO9oqhjoGNbmZK2SYOcMpAAfHYHK5mY5m2vfp7iJzsm+XszUYLIQ9hBqMLmeXgHm6Bzjcg8jcO5Zj7KDJ222aZhUtFX0zpMrHCNwLzq9pL2uJ4kubnBvfRquWCZr2te03a5oe09Q4XB9yqXafa2mxHC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" />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </div>
          <div className="col-md-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHtWgj8cv8GLn77ICDgWgS4OToU6S7WTS4wA&usqp=CAU" />
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </div>
          <div className="col-md-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMroo3LxcF3L-jD9GaoZ8op-dYdUk6u6Ocg&usqp=CAU" />
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
