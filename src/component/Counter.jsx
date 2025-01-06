/* eslint-disable react/prop-types */
import CountUp from "react-countup";

function Counter({ countEnd }) {
  return (
    <CountUp
      className="account-balance"
      start={0}
      end={countEnd}
      duration={5}
      useEasing={true}
      separator=","
    />
  );
}

export default Counter;
