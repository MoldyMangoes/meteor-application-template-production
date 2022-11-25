import React from 'react';
import { Container, Col, Row, Table } from 'react-bootstrap';
// import { useReactToPrint } from 'react-to-print';
import { useTracker } from 'meteor/react-meteor-data';
import { Testimonies } from '../../api/testimony/TestimonyCollection';
import TestimonyItem from '../components/TestimonyItem';
import LoadingSpinner from '../components/LoadingSpinner';
import { PAGE_IDS } from '../utilities/PageIDs';

const ListTestimony = () => {
  // const [position, setPosition] = useState('');
  // const allowedPosition = [
  //   'Admin',
  //   'Writer',
  //   'PIPE Approver',
  //   'Final Approver',
  // ];
  // code structure taken from list stuff file
  const { ready, testimonies } = useTracker(() => {
    const subscription = Testimonies.subscribeTestimony();
    const rdy = subscription.ready();
    const testimonyItems = Testimonies.find(
      {},
      { sort: { lastName: 1 } },
    ).fetch();
    return {
      testimonies: testimonyItems,
      ready: rdy,
    };
  }, []);
  // const componentRef = useRef();
  // const handlePrint = useReactToPrint({
  // content: () => componentRef.current,
  // });
  // useEffect(() => {
  //   if (currentUser !== '' && currentUser !== undefined) {
  //     if (ready) {
  //       const email = currentUser;
  //       const isAdmin = Roles.userIsInRole(Meteor.userId(), [ROLE.ADMIN]);
  //       console.log(email);
  //       if (!isAdmin) {
  //         const pos = UserProfiles.findByEmail(email).position;
  //         // console.log(pos)
  //         setPosition(pos);
  //       } else {
  //         setPosition('Admin');
  //       }
  //     }
  //   }
  // });

  const style = { width: '100%', margin: 0 };
  // TO DO make it so that you can only edit testimony you made
  return ready ? (
    <Container id={PAGE_IDS.LIST_TESTIMONY} className="py-3">
      <Row className="justify-content-center" style={style}>
        <Col md={7} style={style}>
          <Table striped bordered hover style={style}>
            <thead>
              <tr>
                <th>Bill No.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Offices</th>
                <th>Position</th>
                <th>Testifying</th>
                <th>Testifying Method</th>
                <th>Testimony</th>
                <th>PDF</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {testimonies.map((testimony) => (
                <TestimonyItem key={testimony.id} testimony={testimony} />
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : (
    <LoadingSpinner message="Loading Testimony" />
  );
};

export default ListTestimony;
