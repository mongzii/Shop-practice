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
          {/* <Card shoes={shoes[0]} i={1} />
          <Card shoes={shoes[1]} i={2} />
          <Card shoes={shoes[2]} i={3} /> */}
          {shoes.map((a, i) => {
            return <Card shoes={shoes[i]} i={i + 1} />;
          })}
          {/* <div className="col-md-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHtWgj8cv8GLn77ICDgWgS4OToU6S7WTS4wA&usqp=CAU" />
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </div>
          <div className="col-md-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMroo3LxcF3L-jD9GaoZ8op-dYdUk6u6Ocg&usqp=CAU" />
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
