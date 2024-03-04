import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";

function TestBrankas() {
  // Simpan status pintu (contoh: "Pintu Tertutup" atau "Pintu Terbuka") dalam variabel
  const statusPintu = "Pintu Brankas Terbuka/Pintu Brankas Tertutup";  // Gantilah dengan status pintu yang sesuai

  return (
    <Container>
      <h1 className="judul text-center">LockSmart Secure</h1>

      <div className="tampilanhome mb-5">
        {/* Tampilkan gambar status pintu */}
        <img src={statusPintu === "Pintu Tertutup" ? "gambar_pintu_tertutup.png" : "gambar_pintu_terbuka.png"} alt="Status Pintu" />

        {/* Tampilkan teks status pintu */}
        <p className="status-pintu text-center">{statusPintu}</p>
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
          // "https://server-brankas.vercel.app/api/data/getDataAll"
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
                      {/* <th scope="col">Teks</th> */}
                      <th scope="col">PIN Lama</th>
                      <th scope="col">PIN Baru</th>
                      <th scope="col">Tanggal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sensorData.map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data.status_pintu}</td>
                        {/* <td>{data.teks_asli}</td> */}
                        <td>{data.encryptedText}</td>
                        <td>{data.teks_dekripsi}</td>
                        <td>{data.teks_dekripsi}</td>
                        <td>{data.teks_dekripsi}</td>
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
          // "https://server-brankas.vercel.app/api/data/getDataAll"
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
                      <th scope="col">PIN Lama</th>
                      <th scope="col">PIN Baru</th>
                      <th scope="col">Tanggal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sensorData.map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        {/* <td>{data.status_pintu}</td> */}
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

export function DataEnkripsi() {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // "https://grafik-sensor.vercel.app/api/sensors/getDataSensor"
          // "https://server-brankas.vercel.app/api/data/getDataAll"
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
                      <th scope="col">Status Brankas</th>
                      <th scope="col">PIN Lama</th>
                      <th scope="col">PIN Baru</th>
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