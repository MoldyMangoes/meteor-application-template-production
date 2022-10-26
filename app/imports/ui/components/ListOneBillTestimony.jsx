import React from 'react';
import { Container, Col, Row, Table } from 'react-bootstrap';
// import { useReactToPrint } from 'react-to-print';
import { useTracker } from 'meteor/react-meteor-data';
import { Testimonies } from '../../api/testimony/TestimonyCollection';
import TestimonyItem from '../components/TestimonyItem';
import LoadingSpinner from '../components/LoadingSpinner';
import { PAGE_IDS } from '../utilities/PageIDs';

const ListOneBillTestimony = ({billNo}) => {
  // code structure taken from list stuff file
  const { ready, testimonies } = useTracker(() => {
    const subscription = Testimonies.subscribeTestimony();
    const rdy = subscription.ready();
    console.log(billNo)
    const testimonyItems = Testimonies.find({billNo}).fetch();
    return {
      testimonies: testimonyItems,
      ready: rdy,
    };
  }, []);
  // const componentRef = useRef();
  // const handlePrint = useReactToPrint({
    // content: () => componentRef.current,
  // });

  const style = { width: '100%', margin: 0 };
  if(ready){
    console.log(testimonies)
  }
  // TO DO make it so that you can only edit testimony you made
  return ready ? (
    <Container id={PAGE_IDS.VIEW_TESTIMONY} className="py-3" key="myke">
      <Row className="justify-content-center" style={style}>
        <Col md={7} style={style}>
          <Table striped bordered hover style={style}>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Testifying</th>
                <th>Testifying Method</th>
                <th>Testimony</th>
                <th>Files</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {testimonies.map((testimony) => (<TestimonyItem key={testimony._id} testimony={testimony} />))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner message="Loading Testimony" />;
};

export default ListOneBillTestimony;