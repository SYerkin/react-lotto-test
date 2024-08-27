import React, { forwardRef, useImperativeHandle, useState } from "react";
import LotoButton from "../../ui/LotoButton"
import { generateCardNumbers } from "../../utils/functions";

interface LotoTableProps {
  ref?: React.Ref<any>;
}

const LotoTable = forwardRef<HTMLDivElement, LotoTableProps>((_, ref) => {
  const [cardNumbers, setCardNumbers] = useState<number[][]>(generateCardNumbers());

  const regenerateCard = () => {
    setCardNumbers(generateCardNumbers());
  };

  useImperativeHandle(ref, () => ({
    getCardNumbers: () => cardNumbers,
  }));

  return (
    <div style={{ textAlign: "center", margin: "20px"}}>
      <table style={{ 
        margin: "auto", 
        borderCollapse: "collapse",
        border: "2px solid black"
      }}>
        <tbody>
          {cardNumbers.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((num, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    border: "1px solid black", 
                    padding: "0",
                    width: "48px",
                    height: "48px",
                    textAlign: "center",
                    fontWeight: "bold",
                    lineHeight: "48px",
                    fontSize: "16px",
                  }}
                >
                  {num !== null ? num : ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <LotoButton onClick={regenerateCard}>Generate</LotoButton>
    </div>
  );
});

export default LotoTable;
