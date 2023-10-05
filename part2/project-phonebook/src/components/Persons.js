const Persons = (props) => {
  return (
    <div>
          <p key={props.id}>
            {props.name} - {props.number}
          </p>
          <button onClick={props.handleDelete}>delete</button>
    </div>
  );
};

export default Persons;
