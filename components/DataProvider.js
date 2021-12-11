/* eslint-disable radix */
import React, {createContext, useEffect, useState} from 'react';
export const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [tweets, setTweets] = useState([]);
  return (
    <DataContext.Provider
      value={{
        tweets,
        setTweets,
      }}>
      {children}
    </DataContext.Provider>
  );
};
