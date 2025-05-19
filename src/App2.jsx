import { useState } from "react";
//set button
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const Statistic = ({ good, neutral, bad }) => {
  //count all clicks
  const sum = bad + neutral + good;
  //count percent of positive clicks
  const positive = (good / sum) * 100;

  const average = () => {
    setBad(-1), setNeutral(0), setGood(1);
  };
  const aver = sum ? (good - bad) / sum : 0;

  if (sum !== 0) {
    return (
      <p>
        good {good}
        <br />
        neutral {neutral}
        <br />
        bad {bad}
        <br />
        all {sum}
        <br />
        positive {positive} %
        <br />
        average {aver}
      </p>
    );
  } else {
    return <p>No feedback given</p>;
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // save clicks of each button to its own state

  const setToGood = () => {
    const newGood = good + 1;
    console.log(' "Good" value now ', newGood);
    setGood(newGood);
  };

  const setToNeutral = () => {
    const newNeutral = neutral + 1;
    console.log(' "Neutral" value now ', newNeutral);
    setNeutral(newNeutral);
  };

  const setToBad = () => {
    const newBad = bad + 1;
    console.log(' "Bad" value now ', newBad);
    setBad(newBad);
  };

  return (
    <section>
      <h1>Give feedback</h1>
      <Button onClick={() => setToGood()} text="good" />
      <Button onClick={() => setToNeutral()} text="neutral" />
      <Button onClick={() => setToBad()} text="bad" />
      <h1>Statistic</h1>
      <Statistic good={good} neutral={neutral} bad={bad} />
    </section>
  );
};

export default App;
