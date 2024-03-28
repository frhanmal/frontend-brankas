import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Card, Container, Row, Table } from "react-bootstrap";
import {Container} from "react-bootstrap";
import Swal from "sweetalert2";
import terbuka from "../assets/img/terbuka.jpeg";
import tertutup from "../assets/img/tertutup.jpeg";

function TampilanHome() {
  const [statusPintu, setStatusPintu] = useState("");
  const [gambarStatusPintu, setGambarStatusPintu] = useState(null);
  const [showHomeContent, setShowHomeContent] = useState(false);

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
        console.log(latestStatusPintu);
      } catch (error) {
        console.error("Error fetching sensor data:", error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 1000);

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
        confirmButtonColor: "#000000", // Ganti dengan warna yang Anda inginkan
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
    <Container>
      <h1 className="judul text-center" style={{ color: "black" }}>
        LOCK SMART SECURE
      </h1>
      {showHomeContent && (
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
      )}
    </Container>
  );
}

export default TampilanHome;
