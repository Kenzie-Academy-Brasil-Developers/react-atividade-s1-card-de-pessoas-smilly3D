import "./styles.css";
const person = [
  {
    name: "Joan",
    age: 20,
    country: "PA",
  },
  {
    name: "Joane",
    age: 21,
    country: "SC",
  },
  {
    name: "James",
    age: 30,
    country: "MA",
  },
];

function PersonCard() {
  const card = person.map((person, index) => {
    return (
      <div className="UserCard" key={index}>
        <div>Name: {person.name}</div>
        <div>Age: {person.age}</div>
        <div>Country: {person.country}</div>
      </div>
    );
  });

  return <div>{card}</div>;
}

export default PersonCard;
