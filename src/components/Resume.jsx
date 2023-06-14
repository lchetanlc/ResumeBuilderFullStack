import React from "react";
import { useState } from "react";
import styled from "styled-components";
import profile from "./profile.jpg";
import BasicDetails from "./BasicDetailsForm";
import EduacationDetails from "./EducationDetails";
import ProfessionalDetails from "./ProfessionalDetailsForm";
import ResumeTemplate from "./ResumeTemplate";
import Image from "./Image";
export function PrintButton() {
  function handleClick() {
    window.print();
  }
  return <button onClick={handleClick}>Download Resume</button>;
}

export default function Resume(props) {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const { resumeInfo, page } = props;
  const ref = React.useRef(null);
  return (
    <Container>
      <Header>
        <Image/>
        <Name>
          <h1>
            {" "}
            {resumeInfo.profile.firstname} {resumeInfo.profile.lastname}
          </h1>
        </Name>
        <Designation>
          <h1>{resumeInfo.profile.title}</h1>
        </Designation>
        <Links>
          <p>{resumeInfo.profile.address}</p>
          <p>{resumeInfo.profile.email}</p>
          <p>{resumeInfo.profile.phone}</p>
          <p>{resumeInfo.profile.linkedin}</p>
          <p>{resumeInfo.profile.github}</p>
          <p>{resumeInfo.profile.website}</p>
        </Links>
      </Header>
      <Body>
        <Left>
          <Card>
            <Heading>
              <h1>Previous Work Experiences</h1>
            </Heading>
            <Content>
              <p>
                <b>{resumeInfo.professional.jobtitle}</b>{" "}
                {resumeInfo.professional.company}
              </p>
              <p>
                {resumeInfo.professional.startdate}{" "}
                {resumeInfo.professional.enddate}
              </p>
              <p>{resumeInfo.professional.jobdescription}</p>
            </Content>
          </Card>
          <Card>
            <Heading>
              <h1>Education</h1>
            </Heading>
            <Content>
              <p>
                <b>{resumeInfo.education.college}</b>{" "}
                {resumeInfo.education.course}
              </p>
              <p>
                {resumeInfo.education.collegestartdate}{" "}
                {resumeInfo.education.collegeenddate}{" "}
              </p>
              <p>
                {resumeInfo.education.schoolcgpa}{" "}
                {resumeInfo.education.collegeaddress}
              </p>
              <p></p>
            </Content>
            <Content>
              <p>
                <b>{resumeInfo.education.school}</b>{" "}
                {resumeInfo.education.stream}
              </p>
              <p>
                {resumeInfo.education.schoolstartdate}{" "}
                {resumeInfo.education.schoolenddate}{" "}
              </p>
              <p>
                {resumeInfo.education.schoolcgpa}{" "}
                {resumeInfo.education.schooladdress}
              </p>
            </Content>
          </Card>
          <Card>
            <Heading>
              <h1>Certifications</h1>
            </Heading>
            <Content>
              <p>{resumeInfo.professional.certificate1}</p>
              <p>{resumeInfo.professional.certificate2}</p>
              <p>{resumeInfo.professional.certificate3}</p>
            </Content>
          </Card>
          <Card>
            <Heading>
              <h1>Projects</h1>
            </Heading>
            <Content>
              <p>{resumeInfo.education.project1}</p>
              <p>{resumeInfo.education.project1tenure}</p>
              <p>{resumeInfo.education.project1description}</p>
            </Content>
            <Content>
              <p>{resumeInfo.education.project2}</p>
              <p>{resumeInfo.education.project2tenure}</p>
              <p>{resumeInfo.education.project2description}</p>
            </Content>
          </Card>
        </Left>
        <Right>
          <Card>
            <Heading>
              <h1>Profile</h1>
            </Heading>
            <Content>
              <p>{resumeInfo.professional.summary}</p>
            </Content>
          </Card>

          <Card>
            <Heading>
              <h1>Skills</h1>
            </Heading>
            <Content>
              <p>{resumeInfo.professional.skills}</p>
              <p>{resumeInfo.professional.education}</p>
            </Content>
          </Card>
          <Card>
            <Heading>
              <h1>Achievements</h1>
            </Heading>
            <Content>
              <p>{resumeInfo.professional.achievement1}</p>
              <p>{resumeInfo.professional.achievement2}</p>
              <p>{resumeInfo.professional.achievement3}</p>
            </Content>
          </Card>
          <Card>
            <Heading>
              <h1>Extra-Curricular Activities</h1>
            </Heading>
            <Content>
              <p>{resumeInfo.professional.extra1}</p>
              <p>{resumeInfo.professional.extra2}</p>
              <p>{resumeInfo.professional.extra3}</p>
            </Content>
          </Card>
        </Right>
      </Body>
      {/* <DownloadButton>
        <PrintButton />
      </DownloadButton> */}
    </Container>
  );
}
const Container = styled.div`
  font-family: "Times New Roman", Times, serif;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: black;
  color: white;
  width: 90%;
  padding: 50px;
  border: 1px solid black;
`;
const Body = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  padding: 50px;
  gap: 100px;
  border: 1px solid black;
`;
const Left = styled.div`
  width: 50%;
`;
const Right = styled.div`
  width: 50%;
`;
// const Image = styled.div`
//   img {
//     border-radius: 50%;
//     height: 200px;
//     width: 200px;
//   }
// `;
const Name = styled.div`
h1{
  font-size: 20px;
}
`;
const Designation = styled.div``;
const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  line-height: 0.1;
  margin-top: 10px;
  gap: 30px;
  margin-top: 10px;
`;
const Card = styled.div``;
const Heading = styled.div`
  letter-spacing: 2px;
`;
const Content = styled.div`
  text-align: left;
  margin-left: 30px;
  margin-bottom: 30px;
  p {
    margin-bottom: -5px;
  }
`;
const DownloadButton = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-right: 50px;
  button {
    background-color: #19a94e;
    padding: 10px;
    border-radius: 10px;
    color: white;
  }
`;
