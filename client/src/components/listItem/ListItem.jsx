import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import "./listItem.scss";

export default function ListItem() {
  return (
    <>
      <div className="listItem">
        <img
          src="https://www.themoviedb.org/t/p/original/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"
          alt="poster"
        />

        <div className="listInfo">
          <div className="infoIcons">
            <PlayArrow />
            <Add />
            <ThumbUpAltOutlined />
            <ThumbDownAltOutlined />
          </div>
          <div className="infoTexts">
            <span>1 hr 45 min</span>
            <span>+16</span>
            <span>1999</span>
          </div> 
          <div className="desc">
            Lorem ipsum dolor sit
          </div>
         <div className="genere"></div>
        </div>
      </div>

    </>
  );
}
