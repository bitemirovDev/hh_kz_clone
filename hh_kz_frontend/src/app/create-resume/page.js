"use client";

import Header from "@/app/components/header/index";
import ContactDetails from "../components/contactDetails";
import MainInfromation from "../components/mainInformation";
import Speciality from "../components/speciality";
import WorkExperience from "../components/workExperience";
import Education from "../components/education";

export default function CreateResume() {
  return (
    <main style={{ marginBottom: "300px" }}>
      <Header />
      <div className="container ptb-30">
        <h1 className="mb40">Ваше резюме</h1>
        <ContactDetails />
        <MainInfromation />
        <Speciality />
        <WorkExperience />
        <Education />
      </div>
    </main>
  );
}
