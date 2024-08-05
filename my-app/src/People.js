const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10 + 1);
};
const People = () => {
  return (
    <ul>
      <li>Alice's lucky number is {generateRandomNumber()}</li>
      <li>Bob's lucky number is {generateRandomNumber()}</li>
    </ul>
  );
};
export default People;
