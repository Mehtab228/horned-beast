import React from 'react';
import './App.css';
import HornedBeast from './HornedBeast'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import data from "./assets/data.json";
import BeastModal from "./BeastModal";
import BeastForm from './BeastForm';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            selectedBeast: {},
            filteredBeast: data,
        }
    }

    setShowModalFalse = () => {
        this.setState({ showModal: false })
    }

    setShowModalTrue = () => {
        this.setState({
            showModal: true
        });
    }

    setBeastToState = (beast) => {
        this.setState({ selectedBeast: beast })
        this.setShowModalTrue();
    }

    handleChange = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        const selectedTerm = parseInt(event.target.value);
        let filteredBeast
        if (selectedTerm) {
             filteredBeast = data.filter(beast => beast.horns === selectedTerm);
        } else {
            filteredBeast = data
        }
        console.log(filteredBeast);

        this.setState({ filteredBeast: filteredBeast })
    }


    render() {
        return (
            <>
                <BeastForm handleChange={this.handleChange} />
                <Container>
                    <Row lg={5}>
                        {this.state.filteredBeast.map((beast) => {
                            return (
                                <HornedBeast 
                                    image_url={beast.image_url}
                                    description={beast.description}
                                    key={beast._id}
                                    title={beast.title}
                                    keyword={beast.keyword}
                                    horns={beast.horns}
                                />
                                
                            )
                        })}

                    </Row>
                </Container>
                {this.state.selectedBeast &&
                    <BeastModal showModal={this.state.showModal} setShowModalFalse={this.setShowModalFalse} selectedBeast={this.state.selectedBeast} />
                }
            </>
        )
    }
}

export default Main