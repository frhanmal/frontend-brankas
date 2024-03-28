import axios from "axios";
import React, { useState } from "react";

import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Swal from "sweetalert2";
// import logo from "../../assets/logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState({
    email: true,
    password: true,
  });

  const [loading, setLoading] = useState(false);

  async function Login() {
    if (loading) return;
    if (!email || !password) {
      Swal.fire(
        "Peringatan",
        "Harap isi semua kolom yang diperlukan",
        "warning"
      );
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      Swal.fire("Peringatan", "Format email tidak valid", "warning");
      return;
    }

    if (password.length < 8) {
      Swal.fire("Peringatan", "Password harus minimal 8 karakter", "warning");
      return;
    }
    setLoading(true);
    const user = {
      email,
      password,
    };
    console.log(user);
    try {
      const result = (
        await axios.post(`https://server-brankas.vercel.app/api/user/login`, user)

      ).data;
      Swal.fire("Okay", "Login Berhasil", "success").then((result) => {
        window.location.href = "/home";
      });
      sessionStorage.setItem("users", JSON.stringify(result));
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          Swal.fire("Oops", "error");
        } else {
          Swal.fire("Oops", "Something went wrong", "error");
        }
      } else if (error.request) {
      } else {
      }
    } finally {
      setLoading(false);
    }
  }

 return (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="cardmodal">
            <Card.Body>
              <Card.Title className="text-center">
                <h2>Login</h2>
              </Card.Title>
              <Card.Text>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setValidation((prevValidation) => ({
                        ...prevValidation,
                        email: !e.target.value || /^\S+@\S+\.\S+$/.test(e.target.value),
                      }));
                    }}
                  />
                  {!validation.email && email.length > 0 && (
                    <Form.Text className="text-danger">Format email tidak valid</Form.Text>
                  )}
                </FloatingLabel>

                <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Password (minimal 8 karakter)"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    minLength="8"
                  />
                  {password.length > 0 && password.length < 8 && (
                    <Form.Text className="text-danger">Password harus minimal 8 karakter</Form.Text>
                  )}
                </FloatingLabel>

                <Button className="btnlogin btn btn-block" onClick={Login} disabled={loading}>
                  {loading ? "Loading..." : "Masuk"}
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Login;

