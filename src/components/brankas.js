import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Table } from "react-bootstrap";
import terbuka from "../assets/img/terbuka.jpeg";
import tertutup from "../assets/img/tertutup.jpeg";

function TampilanHome() {
  const [statusPintu, setStatusPintu] = useState("");
  const [gambarStatusPintu, setGambarStatusPintu] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://server-brankas.vercel.app/api/data/getDataAll"
        );
        const latestStatusPintu =
          response.data.length > 0 ? response.data[0].status_pintu : "";
        setStatusPintu(latestStatusPintu);
        setGambarStatusPintu(
          latestStatusPintu === "PINTU BRANKAS TERBUKA" ? terbuka : tertutup
        );
      } catch (error) {
        console.error("Error fetching sensor data:", error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <h1 className="judul text-center" style={{ color: "black" }}>
        LOCK SMART SECURE
      </h1>

      <div className="tampilanhome mb-5 text-center">
        {gambarStatusPintu && (
          <img
            src={gambarStatusPintu}
            alt="Status Pintu"
            style={{ width: "100px" }}
          />
        )}

        <p className="status-pintu text-center">{statusPintu}</p>
      </div>
    </Container>
  );
}

export default TampilanHome;

export function DataTabel() {
  const [sensorData, setSensorData] = useState([]);
  const [statusPintu, setStatusPintu] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://server-brankas.vercel.app/api/data/getDataAll"
        );
        setSensorData(response.data);

         setStatusPintu(
           response.data.length > 0 ? response.data[0].status_pintu : ""
         );
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
          <h1
            className="judul text-center"
            style={{ color: "black", marginTop: "0", marginBottom: "20" }}
          >
            STATUS BRANKAS
          </h1>
          <div class="product-catagory-wrap">
            <Container>
              <Card className="mb-3 catagory-card">
                <Table responsive bordered>
                  <thead>
                    {/* Gambar ketika pintu terbuka/ tertutup */}
                    <tr>
                      <th scope="col" style={{ width: "20px" }}>
                        No
                      </th>

                      <th scope="col">Status</th>
                      <th scope="col">Tanggal</th>
                      <th scope="col">Gambar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sensorData.map((data, index) => (
                      <tr key={index}>
                        <td style={{ textAlign: "center" }}>{index + 1}</td>
                        <td>{data.status_pintu}</td>
                        <td>
                          {data.createdAt !== null
                            ? new Date(data.createdAt).toLocaleString()
                            : "N/A"}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <img
                            src={
                              data.status_pintu === "PINTU BRANKAS TERBUKA"
                                ? terbuka
                                : tertutup
                            }
                            alt="Status Pintu"
                            style={{ width: "50px" }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
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
                <Table responsive bordered>

                  <thead>

                  {/* Gambar ketika pintu terbuka/ tertutup */}
                    <tr>
                      <th scope="col" style={{ width: '20px' }}>No</th>

                      <th scope="col">Status</th>
                      <th scope="col">PIN Lama</th>
                      <th scope="col">PIN Baru</th>
                      <th scope="col">Tanggal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sensorData.map((data, index) => (
                      <tr key={index}>
                        <td  style={{ textAlign: 'center' }}>{index + 1}</td>
                        <td>{data.status_pintu}</td>
                        <td>{data.encryptedText}</td>
                        <td>{data.teks_dekripsi}</td>
                        <td>{data.teks_dekripsi}</td>
                        <td>{data.teks_dekripsi}</td>
                        <td>
                          {data.createdAt !== null
                            ? new Date(data.createdAt).toLocaleString()
                            : "N/A"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
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
          // 'https://server-brankas.vercel.app/api/data/getDataAll'
          'https://server-brankas.vercel.app/api/riwayatpin/getRiwayatPin'
        );
        setSensorData(response.data);
      } catch (error) {
        console.error('Error fetching sensor data:', error);
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
          <h1
            className="judul text-center"
            style={{ color: 'black', marginTop: '0', marginBottom: '20' }}
          >
            RIWAYAT PIN
          </h1>
          <div class="product-catagory-wrap">
            <Container>
              <Card className="mb-3 catagory-card">
                <Table responsive bordered>

                  <thead>
                    <tr>
                      <th scope="col" style={{ width: '20px' }}>No</th>

                      <th scope="col">PIN Lama</th>
                      <th scope="col">PIN Baru</th>
                      <th scope="col">Tanggal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sensorData.map((data, index) => (
                      <tr key={index}>
                        <td  style={{ textAlign: 'center' }}>{index + 1}</td>
                        <td>{data.pin_lama}</td>
                        <td>{data.pin_baru}</td>
                        <td>
                          {data.createdAt !== null
                            ? new Date(data.createdAt).toLocaleString()
                            : 'N/A'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
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
        <h1 className="judul text-center" style={{ color: 'black', marginTop:'0', marginBottom:'20' }}>DATA ENKRIPSI</h1>
          <div class="product-catagory-wrap">
            <Container>
              <Card className="mb-3 catagory-card">
                <Table responsive bordered>

                  <thead>

                    <tr>
                      <th scope="col" style={{ width: '20px' }}>No</th>

                      <th scope="col">Status Brankas</th>
                      <th scope="col">PIN Lama</th>
                      <th scope="col">PIN Baru</th>
                      <th scope="col">Tanggal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sensorData.map((data, index) => (
                      <tr key={index}>
                        <td  style={{ textAlign: 'center' }}>{index + 1}</td>
                        <td>{data.teks_enkripsi}</td>
                        <td>{data.teks_enkripsi_sebelum}</td>
                        <td>{data.teks_enkripsi_sesudah}</td>
                        <td>
                          {data.createdAt !== null
                            ? new Date(data.createdAt).toLocaleString()
                            : "N/A"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>
            </Container>
          </div>
        </Container>
      </div>
    </Row>
  );
}



export function DataFilter() {
  const [sensorData, setSensorData] = useState([]);
  const [statusPintu, setStatusPintu] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://server-brankas.vercel.app/api/data/getDataAll"
        );
        setSensorData(response.data);
        setStatusPintu(
          response.data.length > 0 ? response.data[0].status_pintu : ""
        );
      } catch (error) {
        console.error("Error fetching sensor data:", error);
      }
    };

    fetchData();

  }, []);

 const handleFilter = (filter) => {
   setStatusPintu(filter);
 };


  return (
    <Row className="justify-content-md-center">
      <div class="product-catagories-wrapper pt-3">
        <Container>
          <h1
            className="judul text-center"
            style={{ color: "black", marginTop: "0", marginBottom: "20" }}
          >
            STATUS BRANKAS
          </h1>
          <div class="product-catagory-wrap">
            <Container>
              <div
                className="mb-3"
                style={{ display: "flex",width: "50%", alignItems: "center" }}
              >
              
                <select
                  className="form-select"
                  id="filterStatusPintu"
                  value={statusPintu}
                  onChange={(e) => handleFilter(e.target.value)}
                >
                  <option value="">Semua</option>
                  <option value="PINTU BRANKAS TERBUKA">Terbuka</option>
                  <option value="PINTU BRANKAS TERTUTUP">Tertutup</option>
                </select>
              </div>

              <Card className="mb-3 catagory-card">
                <Table responsive bordered>
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        style={{ width: "20px", textAlign: "center" }}
                      >
                        No
                      </th>
                      <th scope="col" style={{ textAlign: "center" }}>
                        Status
                      </th>
                      <th scope="col" style={{ textAlign: "center" }}>
                        Gambar
                      </th>
                      <th scope="col" style={{ textAlign: "center" }}>
                        Tanggal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sensorData.map(
                      (data, index) =>
                        (statusPintu === "" ||
                          data.status_pintu === statusPintu) && (
                          <tr key={index}>
                            <td style={{ textAlign: "center" }}>{index + 1}</td>
                            <td>{data.status_pintu}</td>
                            <td style={{ textAlign: "center" }}>
                              <img
                                src={
                                  data.status_pintu === "PINTU BRANKAS TERBUKA"
                                    ? terbuka
                                    : tertutup
                                }
                                alt="Status Pintu"
                                style={{ width: "100px" }}
                              />
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {data.createdAt !== null
                                ? new Date(data.createdAt).toLocaleString()
                                : "N/A"}
                            </td>
                          </tr>
                        )
                    )}
                  </tbody>
                </Table>
              </Card>
            </Container>
          </div>
        </Container>
      </div>
    </Row>
  );
}