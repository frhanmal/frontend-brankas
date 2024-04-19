import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Table } from "react-bootstrap";
import terbuka from "../assets/img/terbuka.jpeg";
import tertutup from "../assets/img/tertutup.jpeg";

function DataFilter() {
    const [sensorData, setSensorData] = useState([]);
    const [statusPintu, setStatusPintu] = useState("");
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://server-brankas.vercel.app/api/data/getNewData"
          );
          setSensorData(response.data);
          setStatusPintu(
            response.data.length > 0 ? response.data[0].teks_dekripsi : "" 
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
              style={{
                color: "black",
                marginTop: "0",
                marginBottom: "20",
                fontSize: "30px",
              }}
            >
              RIWAYAT STATUS BRANKAS
            </h1>
            <div class="product-catagory-wrap">
              <Container>
                <div
                  className="mb-3"
                  style={{
                    display: "flex",
                    width: "50%",
                    alignItems: "center",
                  }}
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
                    ``
                    <tbody>
                      {sensorData.map(
                        (data, index) =>
                          (statusPintu === "" ||
                            data.teks_dekripsi === statusPintu) && (
                            <tr key={index}>
                              <td style={{ textAlign: "center" }}>
                                {index + 1}
                              </td>
                              <td>{data.teks_dekripsi}</td>
                              <td style={{ textAlign: "center" }}>
                                <img
                                  src={
                                    data.teks_dekripsi ===
                                    "PINTU BRANKAS TERBUKA"
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

  export default DataFilter;