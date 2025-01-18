import { createContext, useState } from "react";
import run from "../config/genimi";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompts, setRecentPrompts] = useState("");
  const [previousPrompts, setPreviousPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if (prompt != undefined) {
      response = await run(prompt);
      setRecentPrompts(prompt);
    } else {
      setPreviousPrompts((prev) => [...prev, input]);
      setRecentPrompts(input);
      response = await run(input);
    }

    let resposeArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < resposeArray.length; i++) {
      if (i === 0 || i % 2 != 1) {
        newResponse += resposeArray[i];
      } else {
        newResponse += "<b>" + resposeArray[i] + "</b>";
      }
    }

    let newResponse2 = newResponse.split("*").join("</br>");
    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    previousPrompts,
    setPreviousPrompts,
    onSent,
    recentPrompts,
    setRecentPrompts,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}> {props.children}</Context.Provider>
  );
};

export default ContextProvider;
