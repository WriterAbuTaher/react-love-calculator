import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Swal from 'sweetalert2'

function FormInput() {

    // const [yourName, setYourName] = useState([])
    // const [loveName, setLoveName] = useState([])
    const [search1, setSearch1] = useState([]);
    const [search2, setSearch2] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${search1}&fname=${search2}`, options)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.error(err));
    }, [search1, search2])

    const updateSearch1 = e => {
        setSearch1(e.target.value)
    }

    const updateSearch2 = e => {
        setSearch2(e.target.value)
    }

    const getSearch = () => {
        {
            Swal.fire(
                `${data.sname} ❤ ${data.percentage}% ❤ ${data.fname}`,
                `${data.result}`,
                'success'
            )
        }
    }

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd74825fa2emsha6800a10152b8dbp1e5822jsn4ccf1f8c0dda',
            'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
    };

    return (
        <div className='container text-center my-5'>
            <h1 style={{ color: "violet" }} className="my-4 text-primary">Choose Your Love 💖</h1>
            <InputGroup className="mb-4">
                <Form.Control value={search1} onChange={updateSearch1} type="search1" className='text-center' placeholder='Your Name' />
                <Form.Control value={search2} onChange={updateSearch2} type="search2" className='text-center' placeholder='Your Love Name' />
            </InputGroup>
            <Button onClick={() => getSearch()}>Calculate Love 💖</Button>
        </div>
    );
}

export default FormInput;