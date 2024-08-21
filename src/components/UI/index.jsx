import "./styles.css";

export function Button({
  text = "Botão",
  backgroundColor = "#006494",
  color = "whitesmoke",
  fontWeight = "bold",
  height = "5rem",
  fontSize = "1.7rem",
  border = "none",
}) {
  const handleButtonClick = () => {
    window.open('https://bmsgestao.bmsltda.com.br');
  };
  return (
    <div onClick={handleButtonClick}
      className="general-button"
      style={{
        backgroundColor: backgroundColor,
        color: color,
        height: height,
        fontWeight: fontWeight,
        border: border,
        borderRadius: "10px",
      }}
    >
      <p className="general-button-text" style={{fontSize: fontSize}}>{text}</p>
    </div>
  );
}
