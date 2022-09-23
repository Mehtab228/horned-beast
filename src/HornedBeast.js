import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favourites: ""
        }
    }

    handleClick = () => {
        this.setState({
            favourites: this.state.favourites + "❤️"
        })
    }



    render() {
        return (
           
                <Card style={{ width: '14rem' }} className="my-auto mb-3 me-4 mt-5" bg='info' >
                    <Card.Img variant="top" src={this.props.image_url} onClick={this.props.setShowModalTrue} className="mx-auto my-2" />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>{this.props.description}</Card.Text>
                        <Card.Text>{this.state.favourites}</Card.Text>
                        <Button variant="primary" onClick={this.handleClick}>Favourite</Button>
                    </Card.Body>
                </Card>
            
        )
    }
}

export default HornedBeast;