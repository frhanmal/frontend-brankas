import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import terbuka from "../assets/img/terbuka.jpeg";
import tertutup from "../assets/img/tertutup.jpeg";

function DataTabel() {
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

    const interval = setInterval(fetchData, 10000);

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


export default DataTabel;