import React from 'react';
import { Card, Col, Container, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FileEarmarkPdf, CalendarMonth, Archive, JournalText, Megaphone } from 'react-bootstrap-icons';
import { useMediaQuery } from 'usehooks-ts';
import MiniCalendar from '../components/MiniCalendar';
import BillQuickReference from '../components/BillQuickReference';
import MiniMeasureTracker from '../components/MiniMeasureTracker';
import HomeMobile from './HomeMobile';
import { PAGE_IDS } from '../utilities/PageIDs';

const objects = [
  {
    title: 'Hearings',
    icon: (<Megaphone size={100} />),
    link: '',
    description: 'description of where this will take you',
  },
  {
    title: 'Measures',
    icon: (<Archive size={100} />),
    link: '',
    description: 'description of where this will take you',
  },
  {
    title: 'Submit Testimony',
    icon: (<FileEarmarkPdf size={100} />),
    link: '',
    description: 'description of where this will take you',
  },
  {
    title: 'Reports',
    icon: (<JournalText size={100} />),
    link: '',
    description: 'description of where this will take you',
  },
  {
    title: 'Calendar',
    icon: (<CalendarMonth size={100} />),
    link: '',
    description: 'description of where this will take you',
  },
];

const darkTheme = false;

const HomeContent = () => (
  <Container id={PAGE_IDS.HOME} fluid className="px-5">
    <Row>
      <Col xs={3}>
        <BillQuickReference darkTheme={darkTheme} />
      </Col>
      <Col>
        <Row xs={1} md={3} className="g-4">
          {objects.map((info) => (
            <Col>
              <OverlayTrigger
                placement="bottom"
                overlay={(<Tooltip>{info.description}</Tooltip>)}
              >
                <Card
                  bg={darkTheme ? 'dark' : ''}
                  text={darkTheme ? 'light' : 'dark'}
                >
                  <Card.Body>
                    <div className="d-flex justify-content-center">
                      {info.icon}
                    </div>
                  </Card.Body>
                  <Card.Footer>
                    {info.title}
                  </Card.Footer>
                </Card>
              </OverlayTrigger>
            </Col>
          ))}
        </Row>
      </Col>
      <Col xs={3}>
        <MiniCalendar darkTheme={darkTheme} />
        <MiniMeasureTracker darkTheme={darkTheme} />
      </Col>
    </Row>
  </Container>
);

const Home = () => {
  const mobileView = useMediaQuery('(max-width: 760px)');
  if (mobileView) {
    return (<HomeMobile darkTheme={darkTheme} />);
  }
  return (<HomeContent />);
};

export default Home;
