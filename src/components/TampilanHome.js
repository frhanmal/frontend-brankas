import { Card, Container, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function TampilanHome() {
  return (
    <Container>
      <h1 className="judul text-center">Kawa Kibi Grafik Sesnsor</h1>

      <div className="tampilanhome mb-5">
        <DataTabel />
      </div>
    </Container>
  );
}

export default TampilanHome;

export function DataTabel() {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://grafik-sensor.vercel.app/ambildatatest"
        );
        setSensorData(response.data);
      } catch (error) {
        console.error("Error fetching sensor data:", error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Row className="justify-content-md-center">
      <div class="product-catagories-wrapper pt-3">
        <Container>
          <div class="section-heading">
            <h6 class="ml-3">Grafik Sensor</h6>
            <Link to="/tampilangrafik" className="btn btn-primary ml-3 mb-5">
              Go to Grafik
            </Link>
          </div>
          <div class="product-catagory-wrap">
            <Container>
              <Card className="mb-3 catagory-card">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Suhu</th>
                      <th scope="col">Kelembaban</th>
                      <th scope="col">NH3</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sensorData.map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data.suhu.toFixed(1)} C</td>
                        <td>{data.kelembaban.toFixed(1)} %</td>
                        <td>{data.NH3.toFixed(1)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </Container>
          </div>
        </Container>
      </div>
    </Row>
  );
}
