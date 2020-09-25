import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import AnimalCard from "./components/animalCard";
import ClipArt from "./types/ClipArt";

function App() {
  const clipArts: ClipArt[] = [
    {
      id: 1,
      imageName: "elephant.png",
      soundName: "",
    },
  ];

  const [visitedId, setVisitedId] = useState<Number[]>([]);

  const retrieveClipArt = (): ClipArt => {
    if (visitedId != null && visitedId.length > 0) {
      const clipArt = clipArts.filter((el) => !visitedId.includes(el.id))[0];
      setVisitedId([...visitedId, clipArt.id]);
      return clipArt;
    } else {
      const art = clipArts[0];
      setVisitedId([art.id]);
      return art;
    }
  };

  return (
    <div>
      <AnimalCard imageName={retrieveClipArt().imageName} />
    </div>
  );
}

export default App;
