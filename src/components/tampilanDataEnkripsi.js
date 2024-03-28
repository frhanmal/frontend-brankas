import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import terbuka from "../assets/img/terbuka.jpeg";
import tertutup from "../assets/img/tertutup.jpeg";


function DataEnkripsi() {
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
  
      const interval = setInterval(fetchData, 10000);
  
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

  export default DataEnkripsi;