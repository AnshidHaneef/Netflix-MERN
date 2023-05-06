import React from "react";
import "./featured.scss";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";

function Featured( {type} ) {
  return (
    <React.Fragment>
      <div className="featured">

       {type && (
         <div className="category">
          <span> {type === "movies" ? "Movies" : "Series" } </span>
          <select name="genere" id="genere">
            <option > Genere </option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
          </select>
         </div>
       )}

        <img
          src="https://c4.wallpaperflare.com/wallpaper/260/579/821/stranger-things-netflix-hd-wallpaper-preview.jpg"
          alt=""
        />
        <div className="info">
          <img
            src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1 "
            alt=""
          />
          <span className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quas, molestias saepe voluptatibus cumque sit tempora. Aliquid,
            nobis cupiditate voluptatem, amet repudiandae odio debitis atque
            tempore natus quam omnis autem!
          </span>
          
          <div className="buttons">
            <button className="play"> 
            <PlayArrow/> <span>play</span> </button>

            <button className="more">
            <InfoOutlined/> <span>Info</span> </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Featured;
