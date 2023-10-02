import { useState, useEffect } from "react";

import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import personService from "./services/persons";

import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    if (checkDuplicate(newName)) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const person = getPerson(newName);
        const newObject = { ...person, number: newNumber };
        personService
          .update(person.id, newObject)
          .then((returnedPerson) => {
            setPersons(
              persons.map((p) => (p.id !== person.id ? p : returnedPerson))
            );
            setMessage(`Updated ${newName}`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
            setMessageType("success");
          })
          .catch((error) => {
            setMessage(
              `Information of ${newName} has already been removed from the server.`
            );
            setTimeout(() => {
              setMessage(null);
            }, 5000);
            setMessageType("error");
          });
      }
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
      };

      personService.create(nameObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));

        setMessage(`Added ${newName}`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      })
      .catch(error => {
        // this is the way to access the error message
        console.log(error.response.data.error)
      })
    }
    setNewName("");
    setNewNumber("");
  };

  const getPerson = (name) => {
    return persons.find(
      (person) => person.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
  };

  const checkDuplicate = (name) => {
    return persons.find((person) => person.name === name) ? true : false;
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterNames = (event) => {
    const filtered_persons = persons.filter((person) =>
      person.name
        .toLocaleLowerCase()
        .includes(event.target.value.toLocaleLowerCase())
    );

    setPersons(filtered_persons);
  };

  const handleDelete = (id) => {
    const name = persons.find((p) => p.id === id).name;
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      personService.deletePerson(id).then((response) => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>

      <Filter handleFilter={handleFilterNames} />

      <h2>Add new</h2>

      <PersonForm
        name={newName}
        number={newNumber}
        handleAddPerson={addPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <Notification message={message} type={messageType} />

      <h2>Numbers</h2>

      {persons.map((person) => (
        <Persons
          key={person.id}
          name={person.name}
          number={person.number}
          handleDelete={() => handleDelete(person.id)}
        />
      ))}
    </div>
  );
};

export default App;
