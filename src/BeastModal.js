import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class BeastModal extends React.Component {
    render() {
        return (
            <>
                <Modal show={this.props.showModal} onHide={this.props.setShowModalFalse}>
                    <Modal.Header closeButton>
                        <Modal.Title className='mx-auto'>{this.props.selectedBeast.title}</Modal.Title>
                    </Modal.Header>
                    <img src={this.props.selectedBeast.image_url} alt={this.props.title} className='mx-auto my-auto' />
                    <Modal.Body>{this.props.selectedBeast.description}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.setShowModalFalse}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default BeastModal