import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function FormInput() {
    return (
        <div className='container text-center my-5'>
            <h1 style={{ color: "violet" }} className="my-4 text-primary">Choose Your Love 💖</h1>
            <InputGroup className="mb-4">
                <Form.Control className='text-center' aria-label="First name" placeholder='Your Name' />
                <Form.Control className='text-center' aria-label="Last name" placeholder='Your Love Name' />
            </InputGroup>
            <Button>Calculate Love 💖</Button>
        </div>
    );
}

export default FormInput;