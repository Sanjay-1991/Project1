import { signup } from "../services/user-services";
import {
  Card,
  CardBody,
  Label,
  Input,
  CardHeader,
  Container,
  Form,
  FormGroup,
  Button,
  Row,
  Col,
} from "reactstrap";
import Base from "../components/Base";
import { useEffect, useState } from "react";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const submitForm = (event) => {
    event.preventDefault();
    console.log(data);
    //client validation logic

    //server api call for sending data
    signup(data)
      .then((response) => {
        console.log(response);
        console.log("Success log");
      })
      .catch((error) => {
        console.log(error);
        console.log("Error Log");
      });
  };
  useEffect(() => {
    console.log(data);
  }, [data]);

  // defing handleChange function
  const handleChange = (event, property) => {
    //setting the data
    console.log("Name Changed");
    setData({ ...data, [property]: event.target.value });
  };
  //Resetting the form
  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };
  return (
    <Base>
      <Container>
        <Row className="mt-2">
          {/* {JSON.stringify(data)} */}
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="info" inverse>
              <CardHeader>
                <h3>Fill Information to Register!!!</h3>
              </CardHeader>
              <CardBody>
                {/* creating form */}
                <Form onSubmit={submitForm}>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter name"
                      type="text"
                      onChange={(e) => handleChange(e, "name")}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Enter Email"
                      type="email"
                      onChange={(e) => handleChange(e, "email")}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      placeholder="Enter Password"
                      type="password"
                      onChange={(e) => handleChange(e, "password")}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="about">About</Label>
                    <Input
                      id="about"
                      name="about"
                      placeholder="Enter About"
                      type="textarea"
                      style={{ height: 150 }}
                      onChange={(e) => handleChange(e, "about")}
                    />
                  </FormGroup>
                  <Container className="text-center">
                    <Button outline color="light">
                      Register
                    </Button>
                    <Button outline color="light" className="ms-2">
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};
export default Signup;
