// import React from 'react';
// // const userContext = React.createContext({user: {}}); // Create a context object
// const userContext = React.createContext({user: "test"}); // Create a context object

// export {
//   userContext // Export it so it can be used by other Components
// };

// import React from 'react'
// const userContext = React.createContext();
// // export const ThingsProvider = ThingsContext.Provider
// const UserProvider = userContext.Provider
// const UserConsumer = userContext.Consumer
// export {UserProvider,UserConsumer}


import React from 'react'

const userContext = React.createContext(true)

export const UserProvider = userContext.Provider
export const UserConsumer = userContext.Consumer

export default userContext