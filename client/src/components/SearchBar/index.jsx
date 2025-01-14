import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { findByName } from "../../redux/actions/actionTypes";
import img from '../../resources/404-Page-Not-Found.png'
import styles from "./styles.css"

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {

    e.preventDefault();
    try {
      const poke = dispatch(findByName(name));
      if (poke.name) {
        return poke;
      }
      return false

    } catch (err) {
      alert('This Pokemon does not exist')
    }
  }

  return (
    <div className={styles.header}>
      <input
        type="text"
        placeholder="Search.."
        onChange={(e) => handleInputChange(e)}
      />
      <button className={styles.button} type="submit" onClick={(e) => handleSubmit(e)
      }>
        Search
      </button>
    </div>
  );
}
