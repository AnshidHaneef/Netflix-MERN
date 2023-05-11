import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import "./list.scss";
import ListItem from "../listItem/ListItem";
import { useRef, useState } from "react";

export default function List() {
  const [moved, isMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  const handleClick = (direction) => {
    isMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      listRef.current.style.transform = `translateX( ${188 + distance}px)`;
      setSlideNumber(slideNumber - 1);
    }
    if (direction === "right" && slideNumber < 4 ) {
      listRef.current.style.transform = `translateX( ${-188 + distance}px)`;
      setSlideNumber(slideNumber + 1);
    }
  };

  console.log(slideNumber ,'slideNumber');
  console.log(setSlideNumber,'setSlidenumber');

  return (
    <div className="list">
      <span className="listTitle">Trending Now</span>

      <div className="wrapper">
        <ArrowBackIosOutlined
          className="arrowIcon left"
          onClick={() => handleClick("left")}
          style={{ display: !moved && slideNumber === 0 && "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
        </div>
        <ArrowForwardIosOutlined
          className="arrowIcon right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
