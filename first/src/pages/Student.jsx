
// const Student = () => {
//   return (
//     <div>
//       <h1>Student page </h1>
//       <p>manage all student here </p>
//     </div>
//   )
// }

// export default Student


import React from "react"

class Counter extends React.Component{
  constructor() {
    super();

    this.state = {
      count :0
    };
  }

  render() {
    return (
      <h1>{this.state.count}</h1>
    )
  }
}


export default Counter ;