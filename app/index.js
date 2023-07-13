import clock from "clock";
import { getElementById } from "document";
import { display } from "display";

const zeroPad = (i) => (i < 10 ? `0${i}` : i);

clock.granularity = "seconds";

const clockText = getElementById("clock");
clock.ontick = ({ date }) => {
  // console.log(date);
  // display.poke();
  const hours = zeroPad(date.getHours() % 12 || 12);
  const mins = zeroPad(date.getMinutes());
  clockText.text = `${hours}:${mins}`;
};

const setTimerButton = getElementById("set-timer-button");

setTimerButton.addEventListener("click", (evt) => {
  console.log("works");
});
