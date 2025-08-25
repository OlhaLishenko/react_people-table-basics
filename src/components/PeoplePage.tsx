import { Loader } from './Loader';
import { useContext, useEffect } from 'react';
import { PeopleContext } from '../store/PeopleContext';
import { PeopleList } from './PeopleList';

export const PeoplePage = () => {
  const { loader, handleGetList } = useContext(PeopleContext);

  useEffect(() => {
    handleGetList();
  }, []);

  return (
    <>
      <h1 className="title">People Page</h1>

      <div className="block">
        <div className="box table-container">
          {loader ? <Loader /> : <PeopleList />}
        </div>
      </div>
    </>
  );
};
