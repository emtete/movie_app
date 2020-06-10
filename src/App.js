import React, { useState, useEffect } from "react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true,
//     };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ isLoading: false });
//     }, 6000);
//   }

//   render() {
//     const { isLoading } = this.state;
//     return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
//   }
// }
function App(props) {
  const [isLoading, setIsLoading] = useState(true);
  // const [isLoading, setIsLoading] = useState('');
  // return <div>{isLoading ? "Loading..." : "We are ready"}</div>;

  setTimeout(() => {
    // setIsLoading(false);
  }, 2000);

  return <div>{`hello, my name is`}</div>;
}

export default App;
