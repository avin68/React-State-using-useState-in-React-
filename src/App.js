import { useState } from "react";

function App() {
  let [number, setNumber] = useState(0);
  let [name, setName] = useState("avin");
  let [myState, setMyState] = useState(false);
  let [fav, setFav] = useState(["book", "driving", "swimming"]);
  let [obj, setObj] = useState({ myName: "avin", myAge: 35 });

  const clickHandler = () => {
    setNumber(number + 1);
    setName("avin esmaeili");
    setMyState(true);
    // setFav(fav.push('elmi'))
    setFav(fav.concat("football"));
    // setFav([...fav, "football"]);
    // setObj({...obj , family: 'es' , gender : 'female'})
    setObj({ ...obj, myName: "sali" });
  };
  return (
    <>
      <h2>
        {number}-{name}-{myState.toString()}-{fav + ""}-{obj.myName}
      </h2>
      {/* <button onClick={clickHandler}>increase</button> */}
      <button onClick={clickHandler}>change state</button>
    </>
  );
}
export default App;
