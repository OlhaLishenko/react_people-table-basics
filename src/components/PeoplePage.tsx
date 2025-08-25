import { Loader } from './Loader';
import { useContext, useEffect } from 'react';
import { PeopleContext } from '../store/PeopleContext';
import { PeopleTable } from './PeopleTable';

export const PeoplePage = () => {
  const { loader, handleGetList, error, alarm, peopleList } = useContext(PeopleContext);

  useEffect(() => {
    handleGetList();
  }, []);

  return (
    <>
      <h1 className="title">People Page</h1>

      <div className="block">
        <div className="box table-container">
          {loader ? <Loader /> : (
            <>
              {error ? (
                <p data-cy="peopleLoadingError" className="has-text-danger">
                  Something went wrong
                </p>
              ) : alarm ? (
                <p data-cy="noPeopleMessage">There are no people on the server</p>
              ) : (
                <table
                  data-cy="peopleTable"
                  className="table is-striped is-hoverable is-narrow is-fullwidth"
                >
                  <thead>
                    <tr>
                      <th></th>
                      <th>Sex</th>
                      <th>Born</th>
                      <th>Died</th>
                      <th>Mother</th>
                      <th>Father</th>
                    </tr>
                  </thead>
                  <tbody>
                    {peopleList.map(person => (
                      <PeopleTable key={person.name} person={person} />
                    ))}
                  </tbody>
                </table>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
