// Create our Word Counter function-based component.

import { useState } from "react";

export const WordCounter = () => {
  /* After you write what you want to return (the main div and other html elements you want),
    you can write the logic here and then
    make the modifications you need on the return
    such as write the function in textarea: */

  /* With useState hook we set the initial state to 0 (count) and then
  return the stateful value wordsCount and the function setWordsCount
  in order to update the state of the value of count. */

  const [wordsCount, setWordsCount] = useState(0);

  // hanle function to calculate the words in text area
  const handleChange = (event) => {
    // get the value (text input) from yhe current target (text area) that has the onChange function
    const getValue = event.currentTarget.value;
    // split the words of the value (text input) with the space character to convert the string to an array of words that are separated by " ".
    const splitWords = getValue.split(" ");
    // filter the splitWords
    const filterWords = splitWords.filter((event) => event);
    // get the length of the splitWords array and count the words
    setWordsCount(filterWords.length);
  };

  return (
    <div className="text-center p-3">
      <textarea
        rows={8}
        placeholder="Write here or copy and paste your text..."
        onChange={handleChange}
      ></textarea>
      <div className="fs-4 p-3 wordCount">Word Count: {wordsCount}</div>
    </div>
  );
};
