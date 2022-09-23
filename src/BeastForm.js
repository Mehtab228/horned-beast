import React from 'react';
import Form from 'react-bootstrap/Form';

class BeastForm extends React.Component {
    render() {
        return (
            <>
                <Form.Select className="form-control" aria-label="Default select example" onChange={this.props.handleChange}>
                    <option>Number of Horns</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="100">Wow...</option>
                </Form.Select>
            </>
        )
    }
}

export default BeastForm