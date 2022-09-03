import React from "react";
import {
  Row,
  Container,
  Col,
  Breadcrumb,
  ListGroup,
  Card,
} from "react-bootstrap";
// import { Container } from "react-bootstrap"
export default ViewBill = () => {
  return (
    <Container className="viewbill-container">
      <Row>
        <center>
          <Col>
            <h2>Bill | Resolution Tracking</h2>
            <Breadcrumb className="viewbill-breadcrumb">
              <Breadcrumb.Item href="#">Current Bill</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Measure(Status)</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </center>
      </Row>
      <Row className="viewbill-row">
        <Col>
          {/* <Card style={{ width: "18rem" }} className="text-center"> */}
          <ListGroup>
            <ListGroup.Item as="li" className="d-flex">
              <div className="ms-2 me-auto viewbill-div viewbill-font ">
                <span className="fw-bold">Bill/Resolution No</span>
                <span>AA1, BA1, CA2, DVB3</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex">
              <div className="ms-2 me-auto viewbill-div viewbill-font">
                <span className="fw-bold">Office</span>
                <span>OSIP, OPS, OCID, ABCD, EFGH, HIJK</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex">
              <div className="ms-2 me-auto viewbill-div viewbill-font">
                <span className="fw-bold">Action</span>
                <span>Testimony</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex">
              <div className="ms-2 me-auto viewbill-div viewbill-font">
                <span className="fw-bold">Status</span>
                <span>2nd Crossover</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex">
              <div className="ms-2 me-auto viewbill-div viewbill-font">
                <span className="fw-bold">Companion</span>
                <span>What goes here?</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex">
              <div className="ms-2 me-auto viewbill-div viewbill-font">
                <span className="fw-bold">Legislation Type</span>
                <span>Bill</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex">
              <div className="ms-2 me-auto viewbill-div viewbill-font">
                <span className="fw-bold">Committee Referral</span>
                <span>ABC, DEF, GHI</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex">
              <div className="ms-2 me-auto viewbill-div viewbill-font">
                <span className="fw-bold">Introduced By</span>
                <span>ABC, DEF, GHI</span>
              </div>
            </ListGroup.Item>
          </ListGroup>
          {/* </Card> */}
        </Col>
        <Col>
          {/* <Card style={{ width: "18rem" }} className="text-center"> */}
          <ListGroup className="viewbill-col2">
            <ListGroup.Item as="li" className="d-flex flex2">
              <div className="ms-2 me-auto flexcenter viewbill-font">
                <div className="fw-bold divcolor">Bill/Resolution No</div>
                <div>AA1, BA1, CA2, DVB3</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex flex2">
              <div className="ms-2 me-auto flexcenter viewbill-font">
                <div className="fw-bold divcolor">Office</div>
                <div>OSIP, OPS, OCID, ABCD, EFGH, HIJK</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex flex2">
              <div className="ms-2 me-auto flexcenter viewbill-font">
                <div className="fw-bold divcolor">Action</div>
                <div>Testimony</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex flex2">
              <div className="ms-2 me-auto flexcenter viewbill-font">
                <div className="fw-bold divcolor">Status</div>
                <div>2nd Crossover</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex flex2">
              <div className="ms-2 me-auto flexcenter viewbill-font">
                <div className="fw-bold divcolor">Companion</div>
                <div>What goes here?</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex flex2">
              <div className="ms-2 me-auto flexcenter viewbill-font">
                <div className="fw-bold divcolor">Legislation Type</div>
                <div>Bill</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex flex2">
              <div className="ms-2 me-auto flexcenter viewbill-font">
                <div className="fw-bold divcolor">Committee Referral</div>
                <div>ABC, DEF, GHI</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex flex2">
              <div className="ms-2 me-auto flexcenter viewbill-font">
                <div className="fw-bold divcolor">Introduced By</div>
                <div>ABC, DEF, GHI</div>
              </div>
            </ListGroup.Item>
          </ListGroup>
          {/* </Card> */}
        </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
};
