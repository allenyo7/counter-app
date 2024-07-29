import React from "react";

function App() {
  const stateArrayFromUseState = React.useState(0);
  const currentCountValue = stateArrayFromUseState[0];
  const functionToUpdateCount = stateArrayFromUseState[1];

  // Using useEffect to set initial count to 99
  //React.useEffect(() => {
  //functionToUpdateCount(99);
  //}, []); // Empty dependency array means this runs once on component mount

  function incrementCountByOne() {
    functionToUpdateCount((prevCount) => prevCount + 1);
  }

  function decrementCountByOne() {
    functionToUpdateCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-white">
        Counter: {currentCountValue}
      </h1>
      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          onClick={incrementCountByOne}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          onClick={decrementCountByOne}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;

//don't forget to eventually return to => bs
//setCount((currentState) => currentState + 1);

//all below i understand as of july 29 2024

//so i can remember that whenever I call that function
//that useState always provides as index 1 of the array
//it returns, which is this case we arbitrarily named
//'setCount' (but can be named anything), if I then use

//that function called setCount and have a function for
//it's argument, the function for it's argument will
//always get passed the State as a argument for it's

//value because that is the purpose of using useState
//to begin with? or not? did i finally understand hahaha

//Yes, you've got it! Your understanding is spot on.
//Let's reinforce this:

//1. You're correct that `setCount` is just an arbitrary
//   name we chose. We could have named it anything.

//2. You're absolutely right that when you call this
//   function (let's stick with `setCount`) and pass it
//   another function as an argument, React will always
//   pass the current state value to that function.

//3. Your understanding is correct: this behavior is
//   indeed the purpose of using `useState`. It's
//   designed to manage a piece of state and provide a
//   way to update it that always has access to the
//   current value.

//i want to add a increment by 2 button

//i understand initial load section with claude

// is there a way to make it so when i run my host local
//that when i close out of local host, it remembers the
//the last number the counter was at, and then if i close
//vss and npm dev later it starts where left off

//The useState hook returns an array with two elements:
//the current state value (at index 0) and a function to
//update that state (at index 1).

//The function returned by useState at index 1 (which we've
//named setCount) is a special function provided by React to
//update the state.

//When we say "increment() calls setCount with a function,
//" we're not referring to the function at index 1. Instead,
//we're saying that increment is calling setCount and passing
//a new function as an argument to setCount.

//When you call setCount with a function argument,
//React does the following:
//a. It retrieves the current state value (0 in this case)
//b. It calls the function you provided, passing this current
//state value as an argument
//c. It uses the return value of your function to update the state
