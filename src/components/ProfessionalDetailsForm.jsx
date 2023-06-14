import { AddIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  GridItem,
  HStack,
  Input,
  SimpleGrid,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const ProfessionalDetails = (props) => {
  const { resumeInfo, setResumeInfo, setPage } = props;

  const [workSection, setWorkSection] = React.useState([]);

  const [workData, setWorkData] = React.useState({
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    jobDetails: "",
  });

  const saveData = () => {
    const isEmpty = Object.values(workData).some((x) => x.trim() === "");
    if (isEmpty) return;

    const duplicate = () => {
      let arr = resumeInfo.professional.work;
      for (let i = 0; i < arr.length; i++) {
        if (JSON.stringify(arr[i]) === JSON.stringify(workData)) {
          return true;
        }
      }
      return false;
    };

    if (duplicate()) return;

    const updatedValue = {
      ...resumeInfo.professional,
      work: resumeInfo.professional.work.concat(workData),
    };
    const updateResumeInfo = {
      ...resumeInfo,
      professional: updatedValue,
    };
    setResumeInfo(updateResumeInfo);
  };

  React.useEffect(() => {
    saveData();
  }, [workSection.length]);

  // const createWorkSection = () => {
    // setWorkSection(workSection.concat(workExperienceForm()));
  // };

  // const workExperienceForm = () => {
    // return (
      // <SimpleGrid spacing={4} columns={[1, 1, 1, 2]} key={workSection.length}>
      //   <FormControl>
      //     <FormLabel>Job Title: </FormLabel>
      //     <Input
      //       type="text"
      //       placeholder="Software developer"
      //       onChange={(e) => {
      //         setWorkData((prev) => ({ ...prev, jobTitle: e.target.value }));
      //       }}
      //     />
      //   </FormControl>
      //   <FormControl>
      //     <FormLabel>Company/Employer: </FormLabel>
      //     <Input
      //       type="text"
      //       placeholder="Employer(Company) name"
      //       onChange={(e) => {
              
      //         setWorkData((prev) => ({ ...prev, company: e.target.value }));
      //       }}
      //     />
      //   </FormControl>
      //   <FormControl>
      //     <FormLabel>Start date: </FormLabel>
      //     <Input
      //       type="text"
      //       placeholder="Enter start date jan 2022"
      //       onChange={(e) => {
      //         setWorkData((prev) => ({ ...prev, startDate: e.target.value }));
      //       }}
      //     />
      //   </FormControl>
      //   <FormControl>
      //     <FormLabel>End date: </FormLabel>
      //     <Input
      //       type="text"
      //       placeholder="Enter end date jan 2023"
      //       onChange={(e) => {
      //         setWorkData((prev) => ({ ...prev, endDate: e.target.value }));
      //       }}
      //     />
      //     <FormHelperText>write present if ongoing</FormHelperText>
      //   </FormControl>
      //   <GridItem colSpan={[1, 1, 1, 2]}>
      //     <FormControl>
      //       <FormLabel>JOb Details:</FormLabel>
      //       <Textarea
      //         placeholder="Describe your role and achievements"
      //         onChange={(e) => {
      //           setWorkData((prev) => ({
      //             ...prev,
      //             jobDetails: e.target.value,
      //           }));
      //         }}
      //       />
      //       <FormHelperText>Hit enter for newline</FormHelperText>
      //     </FormControl>
      //   </GridItem>
      // </SimpleGrid>

    // );
  // };

  return (
    <Stack spacing={4}>
      <FormControl>
        <FormLabel>Summary:</FormLabel>
        <Textarea
          placeholder="Introduce yourself by pitching your skills & explaining how they can be of value to a company"
          value={resumeInfo.professional.summary}
          onChange={(e) => {
            const updateValue = {
              ...resumeInfo.professional,
              summary: e.target.value,
            };
            const updateResumeInfo = {
              ...resumeInfo,
              professional: updateValue,
            };
            setResumeInfo(updateResumeInfo);
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Skills:</FormLabel>
        <Input
        style={{height:"40px"}}
          placeholder="Communication, Teambuilding, etc.."
          value={resumeInfo.professional.skills}
          onChange={(e) => {
            const updateValue = {
              ...resumeInfo.professional,
              skills: e.target.value,
            };
            const updateResumeInfo = {
              ...resumeInfo,
              professional: updateValue,
            };
            setResumeInfo(updateResumeInfo);
          }}
        />
        
       
      </FormControl>
      
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} placeItems="center">
      
      <FormControl>
          <FormLabel>Job Title: </FormLabel>
          <Input
            type="text"
            placeholder="Your first name"
            value={resumeInfo.professional.jobtitle}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.professional,
                jobtitle: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, professional: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Company/Employer: </FormLabel>
          <Input
            type="text"
            placeholder="Your Last Name"
            value={resumeInfo.professional.company}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.professional,
                company: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, professional: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Start date: </FormLabel>
          <Input
            type="text"
            placeholder="Your Designation"
            value={resumeInfo.professional.startdate}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.professional,
                startdate: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, professional: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last date:</FormLabel>
          <Input
            type="text"
            placeholder="Your Designation"
            value={resumeInfo.professional.enddate}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.professional,
                enddate: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, professional: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        
        </SimpleGrid>
        <FormControl>
        <FormLabel>Job Description: </FormLabel>
        <Textarea
          placeholder="Provide with details and projects you worked, during the tenrue"
          value={resumeInfo.professional.jobdescription}
          onChange={(e) => {
            const updateValue = {
              ...resumeInfo.professional,
              jobdescription: e.target.value,
            };
            const updateResumeInfo = {
              ...resumeInfo,
              professional: updateValue,
            };
            setResumeInfo(updateResumeInfo);
          }}
        />
      </FormControl>
      <FormControl>
      <h1 style={{textAlign:"center",fontSize:"30px",fontWeight:"bold",marginTop:"10px",marginBottom:"20px"}}>Certifications</h1>
        
        <Input
        style={{height:"40px",marginBottom:"20px"}}
          placeholder="Communication, Teambuilding, etc.."
          value={resumeInfo.professional.certificate1}
          onChange={(e) => {
            const updateValue = {
              ...resumeInfo.professional,
              certificate1: e.target.value,
            };
            const updateResumeInfo = {
              ...resumeInfo,
              professional: updateValue,
            };
            setResumeInfo(updateResumeInfo);
          }}
        />
        <Input
        style={{height:"40px",marginBottom:"20px"}}px
          placeholder="Communication, Teambuilding, etc.."
          value={resumeInfo.professional.certificate2}
          onChange={(e) => {
            const updateValue = {
              ...resumeInfo.professional,
              certificate2: e.target.value,
            };
            const updateResumeInfo = {
              ...resumeInfo,
              professional: updateValue,
            };
            setResumeInfo(updateResumeInfo);
          }}
        />
       
        <Input
        style={{height:"40px"}}
          placeholder="Communication, Teambuilding, etc.."
          value={resumeInfo.professional.certificate3}
          onChange={(e) => {
            const updateValue = {
              ...resumeInfo.professional,
              certificate3: e.target.value,
            };
            const updateResumeInfo = {
              ...resumeInfo,
              professional: updateValue,
            };
            setResumeInfo(updateResumeInfo);
          }}
        />
       
      </FormControl>
    
      
        
      {workSection}
      {/* <Button
        colorScheme="messenger"
        onClick={createWorkSection}
        w="max-content"
        rightIcon={<AddIcon />}
      >
        Add Work Experience
      </Button> */}
      <HStack spacing={8} justify="center">
        <Button
          colorScheme="blue"
          onClick={() => {
            setPage((p) => p - 1);
          }}
          leftIcon={<ChevronLeftIcon />}
        >
          back
        </Button>
        <Button
          colorScheme="whatsapp"
          onClick={() => {
            saveData();
            setPage((p) => p + 1);
          }}
          rightIcon={<ChevronRightIcon />}
        >
          Save
        </Button>
      </HStack>
    </Stack>
  );
};

export default ProfessionalDetails;
