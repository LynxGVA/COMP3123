import React from "react";
import axios from "axios";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

class PersonList extends React.Component {
  state = { persons: [] };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=10")
      .then(res => this.setState({ persons: res.data.results }));
  }

  render() {
    return (
      <Container className="my-4">
        <h2 className="text-center bg-success text-white py-3 rounded">User List</h2>
        {this.state.persons.map((p, i) => (
          <Card key={i} className="my-3 bg-info text-white">
            <Card.Body>
              <Row>
                <Col md="auto">
                  <img src={p.picture.large} alt="" width="140" height="140" className="rounded-circle" />
                </Col>
                <Col>
                  <p><b>User Name:</b> {p.login.username}</p>
                  <p><b>Gender:</b> {p.gender}</p>
                  <p><b>Time Zone Description:</b> {p.location.timezone.description}</p>
                  <p><b>Address:</b> {p.location.street.number} {p.location.street.name}, {p.location.city}, {p.location.state}, {p.location.country}</p>
                  <p><b>Email:</b> {p.email}</p>
                  <p><b>Birth Date and Age:</b> {p.dob.date} ({p.dob.age})</p>
                  <p><b>Register Date:</b> {p.registered.date}</p>
                  <p><b>Phone#:</b> {p.phone}</p>
                  <p><b>Cell#:</b> {p.cell}</p>
                  <Button variant="primary" size="sm">Details</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Container>
    );
  }
}

export default PersonList;
