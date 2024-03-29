import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Table } from "react-bootstrap";
import Swal from "sweetalert2";


function RiwayatPin() {
    const [sensorData, setSensorData] = useState([]);
    const [showHomeContent, setShowHomeContent] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://server-brankas.vercel.app/api/riwayatpin/getRiwayatPin'
        );
        setSensorData(response.data);
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const users = JSON.parse(sessionStorage.getItem("users"));
    if (!users) {
      Swal.fire({
        title: "Akses Ditolak",
        text: "Anda belum login. Silahkan login terlebih dahulu",
        icon: "warning",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/";
        }
      });

      return;
    }

    setShowHomeContent(true);
  }, []);


  return (
    <Row className="justify-content-md-center">
      {showHomeContent && ( // Tambahkan kondisi untuk menampilkan konten
      <div class="product-catagories-wrapper pt-3">
        <Container>
          <h1
            className="judul text-center"
            style={{ color: 'black', marginTop: '0', marginBottom: '20', fontSize: "30px" }}
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
      )}
    </Row>
  );
}

export default RiwayatPin;