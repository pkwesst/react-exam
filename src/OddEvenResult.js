const OddEvenResult = ({ count }) => {
  console.log(count);
  return (
    <>{count % 2 === 0 ? count + "는 짝수입니다." : count + "는 홀수입니다."}</>
  );
};

export default OddEvenResult;
