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

const Hey = (props) => {
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



  return (
    <Stack spacing={4}>
      
      <FormControl>
      <h1 style={{textAlign:"center",fontSize:"30px",fontWeight:"bold",marginTop:"10px",marginBottom:"20px"}}>Achievements</h1>
        
        <Input
        style={{height:"40px",marginBottom:"20px"}}
          placeholder="Communication, Teambuilding, etc.."
          value={resumeInfo.professional.achievement1}
          onChange={(e) => {
            const updateValue = {
              ...resumeInfo.professional,
              achievement1: e.target.value,
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
          value={resumeInfo.professional.aachievement2}
          onChange={(e) => {
            const updateValue = {
              ...resumeInfo.professional,
              achievement2: e.target.value,
            };
            const updateResumeInfo = {
              ...resumeInfo,
              professional: updateValue,
            };
            setResumeInfo(updateResumeInfo);
          }}
        />
       
        <Input
        style={{height:"40px",marginBottom:"20px"}}
          placeholder="Communication, Teambuilding, etc.."
          value={resumeInfo.professional.achievement3}
          onChange={(e) => {
            const updateValue = {
              ...resumeInfo.professional,
              achievement3: e.target.value,
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
      <h1 style={{textAlign:"center",fontSize:"30px",fontWeight:"bold",marginBottom:"20px"}}>Extra-Curricular Activities</h1>
        
        <Input
        style={{height:"40px",marginBottom:"20px"}}
          placeholder="Communication, Teambuilding, etc.."
          value={resumeInfo.professional.extra1}
          onChange={(e) => {
            const updateValue = {
              ...resumeInfo.professional,
              extra1: e.target.value,
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
          value={resumeInfo.professional.extra2}
          onChange={(e) => {
            const updateValue = {
              ...resumeInfo.professional,
              extra2: e.target.value,
            };
            const updateResumeInfo = {
              ...resumeInfo,
              professional: updateValue,
            };
            setResumeInfo(updateResumeInfo);
          }}
        />
       
        <Input
        style={{height:"40px",marginBottom:"20px"}}
          placeholder="Communication, Teambuilding, etc.."
          value={resumeInfo.professional.extra3}
          onChange={(e) => {
            const updateValue = {
              ...resumeInfo.professional,
              extra3: e.target.value,
            };
            const updateResumeInfo = {
              ...resumeInfo,
              professional: updateValue,
            };
            setResumeInfo(updateResumeInfo);
          }}
        />
       
      </FormControl>
      
        
     
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
          Save & Submit
        </Button>
      </HStack>
    </Stack>
  );
};

export default Hey;
