import React, { useCallback, useState } from 'react';
import { Person } from '../types/Person';
import { getPeople } from '../api/api';

type PeopleContextType = {
  peopleList: Person[];
  setPeopleList: React.Dispatch<React.SetStateAction<Person[]>>;
  loader: boolean;
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  alarm: boolean;
  setAlarm: React.Dispatch<React.SetStateAction<boolean>>;
  handleGetList: () => void;
};

export const PeopleContext = React.createContext<PeopleContextType>({
  peopleList: [],
  setPeopleList: () => {},
  loader: false,
  setLoader: () => {},
  error: false,
  setError: () => {},
  alarm: false,
  setAlarm: () => {},
  handleGetList: () => {},
});

export const PeopleContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [peopleList, setPeopleList] = useState<Person[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [alarm, setAlarm] = useState<boolean>(false);

  const handleGetList = useCallback(async () => {
    try {
      setLoader(true);
      const list = await getPeople();

      if (list.length === 0) {
        setAlarm(true);
      }

      setPeopleList(list);
    } catch {
      setError(true);
    } finally {
      setLoader(false);
    }
  }, []);

  const value = {
    peopleList,
    setPeopleList,
    loader,
    setLoader,
    error,
    setError,
    alarm,
    setAlarm,
    handleGetList,
  };

  return (
    <PeopleContext.Provider value={value}>{children}</PeopleContext.Provider>
  );
};
