import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";

export default function watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls  
        src="https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcSwvPEmtdOPSGAa8Hb5_sPBfIGXDlAy27msuA" />
    </div>
  );
}
