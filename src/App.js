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
    setIsLoading(false);
  }, 6000);

  return <div className='load'>{`${isLoading}`}</div>;
}

export default App;
