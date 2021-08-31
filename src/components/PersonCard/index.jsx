import "./styles.css";
function PersonCard({ name, age, country }) {
  return (
    <div className="UserCard">
      <span>
        <p>name: {name}</p>
        <p>age: {age}</p>
        <p>country: {country}</p>
      </span>
    </div>
  );
}

export default PersonCard;
