import React from 'react';
import HornedBeast from './HornedBeast'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from "./assets/data.json"

class Main extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <Row lg={5}>
                        {data.map((beast) => {
                            return (<Col className='mb-3'><HornedBeast image_url={beast.image_url} description={beast.description} key={beast._id} title={beast.title} keyword={beast.keyword} horns={beast.horns} /></Col>)
                        })}
                    </Row>
                </Container>
            </>
        )
    }
}

export default Main