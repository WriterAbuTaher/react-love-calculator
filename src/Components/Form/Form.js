import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Swal from "sweetalert2";

function FormInput() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d74825fa2emsha6800a10152b8dbp1e5822jsn4ccf1f8c0dda",
      "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
    },
  };

  const handleResult = async (e) => {
    e.preventDefault();

    const form = e.target;

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;

    const response = await fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?sname=${firstName}&fname=${lastName}`,
      options
    );
    const data = await response.json();

    if (response.ok) {
      Swal.fire(
        `${data.sname} 🤍 ${data.percentage}% 🤍 ${data.fname}`,
        `${data.result}`,
        "success"
      );

      form.reset();
    }
  };

  return (
    <div className="container-sm text-center my-5">
      <h1 style={{ color: "violet" }} className="my-4 text-primary">
        Calculate Your Love 🤍
      </h1>
      <form onSubmit={(e) => handleResult(e)}>
        <InputGroup className="mb-4">
          <Form.Control
            name="firstName"
            className="text-center"
            placeholder="Your Name"
          />
          <Form.Control
            name="lastName"
            className="text-center"
            placeholder="Your Love Name"
          />
        </InputGroup>
        <Button type="submit">Calculate Love 🤍</Button>
      </form>
    </div>
  );
}

export default FormInput;
