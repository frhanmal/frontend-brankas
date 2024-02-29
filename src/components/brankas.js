import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";

function TestBrankas() {
  return (
    <Container>
      <h1 className="judul text-center">Kawa Kibi Grafik Sesnsor</h1>

      <div className="tampilanhome mb-5">
        <DataTabel />
        <RiwayatPin />
        
      </div>
    </Container>
  );
}

export default TestBrankas;

export function DataTabel() {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // "https://grafik-sensor.vercel.app/api/sensors/getDataSensor"
          "https://server-brankas.vercel.app/api/data/getDataAll"
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
          <div class="product-catagory-wrap">
            <Container>
              <Card className="mb-3 catagory-card">
                <table className="table">
                  <thead>

                  {/* Gambar ketika pintu terbuka/ tertutup */}
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Status</th>
                      {/* <th scope="col">Teks</th>
                      <th scope="col">Enkripsi</th> */}
                      {/* <th scope="col">Deksripsi</th> */}
                      {/* <th scope="col">Riwayat</th> */}
                      <th scope="col">Tanggal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sensorData.map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data.status_pintu}</td>
                        {/* <td>{data.teks_asli}</td>
                        <td>{data.encryptedText}</td> */}
                        {/* <td>{data.teks_dekripsi}</td> */}
                        {/* <td>{data.riwayat_pin}</td> */}
                        <td>
                          {data.createdAt !== null
                            ? new Date(data.createdAt).toLocaleString()
                            : "N/A"}
                        </td>
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

export function DataAll() {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // "https://grafik-sensor.vercel.app/api/sensors/getDataSensor"
          "https://server-brankas.vercel.app/api/encrypted/getDataEncrypted"
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
          <div class="product-catagory-wrap">
            <Container>
              <Card className="mb-3 catagory-card">
                <table className="table">
                  <thead>

                  {/* Gambar ketika pintu terbuka/ tertutup */}
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Status</th>
                      {/* <th scope="col">Teks</th>
                      <th scope="col">Enkripsi</th> */}
                      {/* <th scope="col">Deksripsi</th> */}
                      {/* <th scope="col">Riwayat</th> */}
                      <th scope="col">Tanggal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sensorData.map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        {/* <td>{data.status_pintu}</td>
                        <td>{data.teks_asli}</td> */}
                        <td>{data.encryptedText}</td>
                        {/* <td>{data.teks_dekripsi}</td> */}
                        {/* <td>{data.riwayat_pin}</td> */}
                        <td>
                          {data.createdAt !== null
                            ? new Date(data.createdAt).toLocaleString()
                            : "N/A"}
                        </td>
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

export function RiwayatPin() {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // "https://grafik-sensor.vercel.app/api/sensors/getDataSensor"
          "https://storage-opal-one.vercel.app/api/data/getDataAll"
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
          <div class="product-catagory-wrap">
            <Container>
              
              <h1> Riwayat Pin</h1>


              <h2>Status Pintu  = TERBUKA / TERTUTUP</h2>
              <h2>PIN LAMA = 1234</h2>
              <h2>PIN BARU = 4321</h2>
              <h2>Tanggal = 29 FEB 2024, 19.00</h2>

            </Container>
          </div>
        </Container>
      </div>
    </Row>
  );
}