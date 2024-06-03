import React from "react";
import "./DieRoll.css";
import Die from "./Die";

export default function DiceRoll() {
  return (
    <div className="DieRoll">
      <h1>Dice Rolls</h1>
      <Die />
      <Die />
      <Die />
    </div>
  );
}
