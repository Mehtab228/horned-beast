import React from 'react';
import HornedBeast from './HornedBeast'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from "./assets/data.json";
import BeastModal from "./BeastModal";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            selectedBeast: null,
        }
    }

    setShowModalFalse = () => {
        this.setState({showModal: false})
    }

    setShowModalTrue = () => {
        this.setState({
            showModal: true
        });
    }

    setBeastToState = (beast) => {
        this.setState({selectedBeast: beast})
        this.setShowModalTrue();
    }

    render() {
        return (
            <>
                <Container>
                    <Row lg={5}>
                        {data.map((beast) => {
                            return (<Col className='mb-3'><HornedBeast image_url={beast.image_url} description={beast.description} key={beast._id} title={beast.title} keyword={beast.keyword} horns={beast.horns} setShowModalTrue={() => this.setBeastToState(beast)} /></Col>)
                        })}
                    </Row>
                </Container>
                {this.state.selectedBeast &&
                    <BeastModal showModal={this.state.showModal} setShowModalFalse={this.setShowModalFalse} selectedBeast={this.state.selectedBeast}/>   
                }
            </>
        )
    }
}

export default Main