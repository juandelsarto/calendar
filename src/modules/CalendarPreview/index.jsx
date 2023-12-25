import { Button } from "@chakra-ui/react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const CalendarPreview = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div ref={componentRef} className="calendar">
        Calendario
      </div>
      <Button onClick={handlePrint} content={componentRef}>
        Imprimir
      </Button>
    </>
  );
};

export default CalendarPreview;
