import "./styles.css";
import Pdf from "react-to-pdf";
import { useRef, useState } from "react";
import ResumeForm from "./ResumeForm";

export default function Pdfcont() {
  
  const ref = useRef();

  return (
    <div className="App">
      <Pdf targetRef={ref} filename="document.pdf">
        {({ toPdf }) => (
          <button onClick={toPdf} className="button">
            Generateee PDF
          </button>
        )}
      </Pdf>
      <div ref={ref}>
        <ResumeForm/>
      </div>
    </div>
  );
}
