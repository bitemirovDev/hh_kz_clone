import MyResume from "./myResume";

export default function MyResumesArray({ resumes }) {
  // eslint-disable-next-line react/jsx-key
  const showResumes = resumes.map((item) => <MyResume item={item} />);

  return <div>{showResumes}</div>;
}
