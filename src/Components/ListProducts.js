import React from "react";
import "./ListProducts.css";
import Product from "./Product";
import { Row, Col, Container } from "react-bootstrap";
import { storeProducts } from "../data";
function ListProducts() {
  return (
    <div className="listProducts">
      <Container fluid="md">
        <Row>
          <Col md={6} sm={8} lg={2}>
            <Product
              title={storeProducts[0].title}
              price={storeProducts[0].price}
              img={storeProducts[0].img}
            />
          </Col>
          <Col md={6} sm={8} lg={2}>
            <Product
              title={storeProducts[1].title}
              price={storeProducts[1].price}
              img={storeProducts[1].img}
            />
          </Col>
          <Col md={6} sm={8} lg={2}>
            <Product
              title={storeProducts[2].title}
              price={storeProducts[2].price}
              img={storeProducts[2].img}
            />
          </Col>
          <Col md={6} sm={8} lg={2}>
            <Product
              title={storeProducts[3].title}
              price={storeProducts[3].price}
              img={storeProducts[3].img}
            />
          </Col>

          <Col md={6} sm={8} lg={2}>
            <Product
              title={storeProducts[4].title}
              price={storeProducts[4].price}
              img={storeProducts[4].img}
            />
          </Col>
          <Col md={6} sm={8} lg={2}>
            <Product
              title={storeProducts[5].title}
              price={storeProducts[5].price}
              img={storeProducts[5].img}
            />
          </Col>
          <Col md={6} sm={8} lg={2}>
            <Product
              title={storeProducts[6].title}
              price={storeProducts[6].price}
              img={storeProducts[6].img}
            />
          </Col>
          <Col md={6} sm={8} lg={2}>
            <Product
              title={storeProducts[7].title}
              price={storeProducts[7].price}
              img={storeProducts[7].img}
            />
          </Col>
          <Col md={6} sm={8} lg={2}>
            <Product
              title={storeProducts[0].title}
              price={storeProducts[0].price}
              img={storeProducts[0].img}
            />
          </Col>
          <Col md={6} sm={8} lg={2}>
            <Product
              title={storeProducts[1].title}
              price={storeProducts[1].price}
              img={storeProducts[1].img}
            />
          </Col>
          <Col md={6} sm={8} lg={2}>
            <Product
              title={storeProducts[2].title}
              price={storeProducts[2].price}
              img={storeProducts[2].img}
            />
          </Col>
          <Col md={6} sm={8} lg={2}>
            <Product
              title={storeProducts[3].title}
              price={storeProducts[3].price}
              img={storeProducts[3].img}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ListProducts;
