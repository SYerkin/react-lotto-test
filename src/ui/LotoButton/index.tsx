import React from "react";

interface LotoButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const LotoButton: React.FC<LotoButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      style={{
        marginTop: "24px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        transition: "background-color 0.3s, transform 0.1s",
        outline: "none",
      }}
      onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.98)"}
      onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#0056b3"}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#007BFF"}
    >
      {children}
    </button>
  );
};

export default LotoButton;
