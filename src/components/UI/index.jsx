import "./styles.css";

export function Button({
  text = "Botão",
  backgroundColor = "#ff7f00",
  color = "white",
  height = "5rem",
  fontSize = "1.7rem",
  padding = "1.5rem",
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
        padding: padding,
      }}
    >
      <p className="general-button-text" style={{fontSize: fontSize}}>{text}</p>
    </div>
  );
}
