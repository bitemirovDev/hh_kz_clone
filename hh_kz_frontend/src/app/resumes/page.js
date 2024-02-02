"use client";

import Header from "@/app/components/header/index";
// import UserLogin from "../components/auth/user";
import MyResumesArray from "../components/myresumes";
import Link from "next/link";

export default function MyResumes() {
  const resumes = [
    {
      position: "Менеджер по работе с клиентами",
      createdAt: "14.03.2023",
      statistics: {
        shows: 0,
        views: 0,
        invitations: 0,
      },
    },
    {
      position: "Game developer",
      createdAt: "20.08.2021",
      statistics: {
        shows: 625,
        views: 8848,
        invitations: 21,
      },
    },
    {
      position: "Учитель химии",
      createdAt: "08.01.2018",
      statistics: {
        shows: 204,
        views: 666,
        invitations: 8,
      },
    },
  ];

  return (
    <main>
      <Header />
      <div className="container">
        <div className="d-flex jc-sb ai-c ptb20">
          <h1 className="mb0">Мои резюме</h1>
          <button className="button button-secondary button-secondary-bordered">
            <Link href="/create-resume">Создать резюме</Link>
          </button>
        </div>

        <MyResumesArray resumes={resumes} />
      </div>
    </main>
  );
}
