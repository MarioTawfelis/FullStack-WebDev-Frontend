import { useState, useEffect } from "react";

import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    if (checkDuplicate(newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
      };

      personService.create(nameObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
    }
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
    const name = persons.find(p => p.id === id).name
    if(window.confirm(`Are you sure you want to delete ${name}?`)){
      personService
      .deletePerson(id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== id))
      })
    }

  }

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

      <h2>Numbers</h2>

      {persons.map((person) => (
        <Persons key={person.id} name={person.name} number={person.number} 
          handleDelete={() => handleDelete(person.id)}/>
      ))}
    </div>
  );
};

export default App;
