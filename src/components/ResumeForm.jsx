import { EditIcon } from "@chakra-ui/icons";
import {
  Box,
  VStack,
  Center,
  Heading,
  Progress,
  Stack,
  HStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import BasicDetails from "./BasicDetailsForm";
import EduacationDetails from "./EducationDetails";
import ProfessionalDetails from "./ProfessionalDetailsForm";
import ProjectDetails from './ProjectDetails';
import ResumeTemplate from "./ResumeTemplate";
import Resume from "./Resume";
import Achievements from "./Hey";
import Pdf from "react-to-pdf";
import { useRef} from "react";

const ResumeForm = () => {
  const [page, setPage] = React.useState(0);
  const [isMobile] = useMediaQuery("(max-width: 798px)");
  const ref = React.createRef();

  const initialState = {
    profile: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      website: "",
      address: "",
    },
    professional: {
      summary: "",
      skills: "",
      work: [],
    },
    education: [],
    certification: [],
  };

  const [resumeInfo, setResumeInfo] = useState(initialState);

  const formPage = [
    "Profile Details",
    "Professional Experience",
    "Educational Details",
    
  ];

  const renderForm = () => {
    switch (page) {
      case 0:
        return (
          <BasicDetails
            resumeInfo={resumeInfo}
            setResumeInfo={setResumeInfo}
            setPage={setPage}
          />
        );
        case 1:
          return (
            <ProfessionalDetails
              resumeInfo={resumeInfo}
              setResumeInfo={setResumeInfo}
              setPage={setPage}
            />
          );
      case 3:
        return (
          <Achievements
            resumeInfo={resumeInfo}
            setResumeInfo={setResumeInfo}
            setPage={setPage}
          />
        );
        case 2:
        return (
          <ProjectDetails
            resumeInfo={resumeInfo}
            setResumeInfo={setResumeInfo}
            setPage={setPage}
          />
        );
       
        
      default:
        return;
    }
  };

  return (
    <Stack mb="50px">
      <Center
        style={{ display: page === 4 ? "none" : "flex" }}
        w="100%"
        px="12px"
        flexDir="column"
      >
        <Heading p={4}>
          Build Your Resume <EditIcon boxSize={8} />
        </Heading>
        <Box w="70%" borderRadius="lg">
          <Progress
            colorScheme="whatsapp"
            value={page === 0 ? 33.3 : page === 1 ? 66.6 : 100}
          />
        </Box>
      </Center>
      {isMobile ? (
        <HStack p={4} spacing={3} justify="center">
          <VStack
            justify="center"
            spacing={4}
            width="90%"
            style={{ display: page === 4 ? "none" : "block" }}
          >
            <Box
              p={8}
              borderRadius="lg"
              bg="gray.900"
              color="white"
              boxShadow="xl"
              rounded="md"
            >
              <Center>
                <Heading mb={4}>{formPage[page]}</Heading>
              </Center>
              {renderForm()}
            </Box>
          </VStack>
          <VStack style={{ display: page === 4 ? "block" : "none" }}>
            {/* <ResumeTemplate resumeInfo={resumeInfo} page={page} /> */}
            <Resume resumeInfo={resumeInfo} page={page}/>
          </VStack>
        </HStack>
      ) : (
        <HStack p={4} spacing={3} align="stretch" justify="center">
          <VStack
            justify="center"
            spacing={4}
            width="50%"
            style={{ display: page === 4 ? "none" : "block" }}
          >
            <Box
              p={8}
              borderRadius="lg"
              bg="gray.900"
              color="white"
              boxShadow="xl"
              rounded="md"
            >
              <Center>
                <Heading mb={4}>{formPage[page]}</Heading>
              </Center>
              {renderForm()}
            </Box>
          </VStack>
          <VStack style={{ width: page === 4 ? "50%" : "50%" , margin:'auto'}}>
            {/* <ResumeTemplate resumeInfo={resumeInfo} page={page} /> */}
    <div ref={ref}>

            <Resume resumeInfo={resumeInfo} page={page}/>
            <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button style={{padding:'10px',backgroundColor:'#38A169',borderRadius:'20px',marginTop:'10px'}} onClick={toPdf}>Generatee Pdf</button>}
      </Pdf>
            </div>
          </VStack>
        </HStack>
      )}
    </Stack>
  );
};

export default ResumeForm;
