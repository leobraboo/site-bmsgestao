import "./styles.css";

export function Button({
  text = "Botão",
  backgroundColor = "#ffd630",
  color = "#001532",
  height = "5rem",
  fontSize = "1.7rem",
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
        borderRadius: "5px",
      }}
    >
      <p className="general-button-text" style={{fontSize: fontSize}}>{text}</p>
    </div>
  );
}
