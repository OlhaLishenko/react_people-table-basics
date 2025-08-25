import { useContext } from 'react';
import { PeopleContext } from '../store/PeopleContext';
import { PersonItem } from './PersonItem';

export const PeopleList: React.FC = () => {
  const { error, alarm, peopleList } = useContext(PeopleContext);

  return (
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
              <th>Name</th>
              <th>Sex</th>
              <th>Born</th>
              <th>Died</th>
              <th>Mother</th>
              <th>Father</th>
            </tr>
          </thead>
          <tbody>
            {peopleList.map(person => (
              <PersonItem key={person.name} person={person} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
