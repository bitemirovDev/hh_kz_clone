"use client";

import Header from "@/app/components/header/index";
import ContactDetails from "../components/contactDetails";
import { useEffect, useState } from "react";
import { END_POINT } from "@/config/end-point";
import axios from "axios";

export default function CreateResume() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get(`${END_POINT}/api/region/cities`).then((res) => {
      setCities(res.data);
    });
  }, []);

  return (
    <main>
      <Header />
      <div className="container ptb-30">
        <h1 className="mb40">Ваше резюме</h1>
        <ContactDetails cities={cities} />
      </div>
    </main>
  );
}
