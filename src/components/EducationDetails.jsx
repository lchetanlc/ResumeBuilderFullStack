import { AddIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  FormLabel,
  SimpleGrid,
  Stack,
  FormControl,
  Input,
  HStack,
  FormHelperText,
} from "@chakra-ui/react";
import React from "react";

const EduacationDetails = (props) => {
  const { resumeInfo, setResumeInfo, setPage } = props;

  const [educationSection, setEduactionSection] = React.useState([]);
  const [certificateSection, setCertificateSection] = React.useState([]);

  const [educationData, setEducationData] = React.useState({
    college: "",
    course: "",
    startDate: "",
    endDate: "",
  });

  const [certificateData, setCertificateData] = React.useState({
    link: "",
    details: "",
  });

  const saveEducationData = () => {
    const isEmpty = Object.values(educationData).some((x) => x === "");
    if (isEmpty) return;

    const duplicate = () => {
      let arr = resumeInfo.education;
      for (let i = 0; i < arr.length; i++) {
        if (JSON.stringify(arr[i]) === JSON.stringify(educationData)) {
          return true;
        }
      }
      return false;
    };

    if (duplicate()) return;

    const updateValue = {
      ...resumeInfo,
      education: resumeInfo.education.concat(educationData),
    };
    setResumeInfo(updateValue);
  };

  const saveCertificateData = () => {
    const isEmpty = Object.values(certificateData).some((x) => x.trim() === "");
    if (isEmpty) return;

    const duplicate = () => {
      let arr = resumeInfo.certification;
      for (let i = 0; i < arr.length; i++) {
        if (JSON.stringify(arr[i]) === JSON.stringify(certificateData)) {
          return true;
        }
      }
      return false;
    };

    if (duplicate()) return;

    const updateValue = {
      ...resumeInfo,
      certification: resumeInfo.certification.concat(certificateData),
    };
    setResumeInfo(updateValue);
  };

  React.useEffect(() => {
    saveEducationData();
  }, [educationSection.length]);

  React.useEffect(() => {
    saveCertificateData();
  }, [certificateSection.length]);

  const createCertificateSection = () => {
    setCertificateSection(
      certificateSection.concat(
        <FormControl key={certificateSection.length}>
          <FormLabel>Certificate Link: </FormLabel>
          <Input
            type="url"
            placeholder="Enter Certificate"
            mb={4}
            onChange={(e) => {
              setCertificateData((prev) => ({ ...prev, link: e.target.value }));
            }}
          />
          <FormLabel>Additional Details: </FormLabel>
          <Input
            type="text"
            placeholder="eg. Level 1 or React or Data Science"
            onChange={(e) => {
              setCertificateData((prev) => ({
                ...prev,
                details: e.target.value,
              }));
            }}
          />
        </FormControl>
      )
    );
  };

  // const createEducationSection = () => {
  //   setEduactionSection(educationSection.concat(educationForm()));
  // };

  // const educationForm = () => (
  //   <></>
  // );

  return (
    <Stack>
        <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} placeItems="center">
      
      <FormControl>
          <FormLabel>College/University: </FormLabel>
          <Input
            type="text"
            placeholder="Your first name"
            value={resumeInfo.education.college}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.education,
                college: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, education: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Course/Degree </FormLabel>
          <Input
            type="text"
            placeholder="Your Last Name"
            value={resumeInfo.education.course}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.education,
                course: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, education: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Start date: </FormLabel>
          <Input
            type="text"
            placeholder="Your Designation"
            value={resumeInfo.education.collegestartdate}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.education,
                collegestartdate: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, education: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last date:</FormLabel>
          <Input
            type="text"
            placeholder="Your Designation"
            value={resumeInfo.education.collegeenddate}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.education,
                collegeenddate: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, education: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>CGPA</FormLabel>
          <Input
            type="text"
            placeholder="Enter you CGPA"
            value={resumeInfo.education.collegecgpa}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.education,
                collegecgpa: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, education: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input
            type="text"
            placeholder="Your college is situated at"
            value={resumeInfo.education.collegeaddress}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.education,
                collegeaddress: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, education: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>School(10+2): </FormLabel>
          <Input
            type="text"
            placeholder="Your first name"
            value={resumeInfo.education.school}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.education,
                school: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, education: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Stream:  </FormLabel>
          <Input
            type="text"
            placeholder="Your Last Name"
            value={resumeInfo.education.stream}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.education,
                stream: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, education: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Start date: </FormLabel>
          <Input
            type="text"
            placeholder="Your Designation"
            value={resumeInfo.education.schoolstartdate}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.education,
                schoolstartdate: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, education: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last date:</FormLabel>
          <Input
            type="text"
            placeholder="Your Designation"
            value={resumeInfo.education.schoolenddate}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.education,
                schoolenddate: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, education: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>CGPA</FormLabel>
          <Input
            type="text"
            placeholder="Enter you CGPA"
            value={resumeInfo.education.schoolcgpa}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.education,
                schoolcgpa: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, education: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input
            type="text"
            placeholder="Your college is situated at"
            value={resumeInfo.education.schooladdress}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.education,
                schooladdress: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, education: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        
        <FormControl>
          <FormLabel>CGPA</FormLabel>
          <Input
            type="text"
            placeholder="Enter you CGPA"
            value={resumeInfo.education.schoolcgpa}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.education,
                schoolcgpa: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, education: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input
            type="text"
            placeholder="Your college is situated at"
            value={resumeInfo.education.schooladdress}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.education,
                schooladdress: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, education: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        
        </SimpleGrid>


      
      
      <HStack spacing={8} justify="center">
        
       
      </HStack>
    </Stack>
  );
};

export default EduacationDetails;
