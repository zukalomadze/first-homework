import { useState } from "react";
import Button from "../ui/Button";


const Background = ({ defaultBackgroundColor, defaultTextColor }) => {
  const [backgroundColor, setBackgroundColor] = useState(
    defaultBackgroundColor
  );
  const [textColor] = useState(defaultTextColor);
  return (
    <>
      <div style={{ background: backgroundColor, color: textColor }}>
        <p>
          Some random text
        </p>
      </div>

      <br />
      <br />

      <Button
        text="red"
        theme='red'
        onClick={function () {
          setBackgroundColor("red");
        }}
      />
      <Button
        text="blue" 
        theme='blue'       
        onClick={function () {
          setBackgroundColor("red");
        }}
      />
      <Button
        text="yellow"
        theme='yellow'
        onClick={function () {
          setBackgroundColor("yellow");
        }}
      />
      <Button
        text="green"
        theme='green'
        onClick={function () {
          setBackgroundColor("green");
        }}
      />
      <Button
        text="purple"
        theme='purple'
        onClick={function () {
          setBackgroundColor("purple");
        }}
      />
      <Button
        text="orange"
        theme='orange'
        onClick={function () {
          setBackgroundColor("orange");
        }}
      />
    </>
  );
};

export default Background;