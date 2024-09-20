import { useState } from "react";

export default function App() {
  const [level, setLevel] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const images = ["/images/น้องหมูเด้ง.jpg", "/images/นัน.jpg"];
  const buttonImages = ["/images/แตงโม.jpg", "/images/ฟักทอง.jpg", "/images/หญ้า.jpg"];
  const backgroundImage = "/images/หมูเด้ง.jpg"; 

  const increaseLevel = (increment) => {
    setLevel((prevLevel) => {
      const newLevel = prevLevel + increment;
      if (newLevel >= 100) {
        setImageIndex(1);
      }
      return newLevel;
    });
  };

  const resetLevel = () => {
    setLevel(0);
    setImageIndex(0);
  };

  const imageSize = `${Math.max(level * 5, 45)}px`;

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    margin: 0,
    position: "relative",
    backgroundImage: `url(${backgroundImage})`, 
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "'Poppins', sans-serif",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.5)", 
    zIndex: 0, 
  };

  const contentStyle = {
    position: "relative",
    zIndex: 1, 
    textAlign: "center",
  };

  const cardStyle = {
    border: "2px solid rgba(255, 255, 255, 0.5)",
    padding: "20px",
    width: "400px",
    height: "400px",
    position: "relative",
    overflow: "hidden",
    borderRadius: "20px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
    backgroundColor: "rgba(255, 255, 255, 0.8)", 
  };

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    objectFit: "contain",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const buttonImageStyle = {
    width: "80px",
    height: "80px",
    cursor: "pointer",
    margin: "10px",
    transition: "transform 0.2s ease",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  };

  const buttonText = {
    color: "#225ec4", 
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#6ec7e2", 
    color: "white",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#6ec7e2",
    transform: "scale(1.05)",
  };

  const titleStyle = {
    color: "#063d8c", 
    fontSize: "42px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  };

  
  const resetButtonContainerStyle = {
    position: "absolute",
    left: "20px",
    bottom: "20px",
  };

  return (
    <div style={containerStyle}>
      
      <div style={overlayStyle}></div>
      
      
      <div style={contentStyle}>
        <h1 style={titleStyle}>Level {level}</h1>

        <div style={cardStyle}>
          <img src={images[imageIndex]} alt="animal" style={imageStyle} />
        </div>

        <div style={buttonContainerStyle}>
          <div style={{ textAlign: "center" }}>
            <img
              src={buttonImages[0]}
              alt="button"
              style={buttonImageStyle}
              onClick={() => increaseLevel(10)}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <p onClick={() => increaseLevel(10)} style={buttonText}>
              Level +10
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src={buttonImages[1]}
              alt="button"
              style={buttonImageStyle}
              onClick={() => increaseLevel(20)}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <p onClick={() => increaseLevel(20)} style={buttonText}>
              Level +20
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src={buttonImages[2]}
              alt="button"
              style={buttonImageStyle}
              onClick={() => increaseLevel(30)}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <p onClick={() => increaseLevel(30)} style={buttonText}>
              Level +30
            </p>
          </div>
        </div>
      </div>

  
      <div style={resetButtonContainerStyle}>
        <button
          onClick={resetLevel}
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style = { ...buttonStyle, ...buttonHoverStyle })}
          onMouseOut={(e) => (e.currentTarget.style = buttonStyle)}
        >
          Reset Level
        </button>
      </div>
    </div>
  );
}
