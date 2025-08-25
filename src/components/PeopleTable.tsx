import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { PersonLink } from './PersonLink';
import { Person } from '../types';
import { useContext } from 'react';
import { PeopleContext } from '../store/PeopleContext';

type PeopleTableProps = {
  person: Person;
};

export const PeopleTable: React.FC<PeopleTableProps> = ({ person }) => {
  const { getPersonInfo } = useContext(PeopleContext);
  const location = useLocation();
  const currentPerson = getPersonInfo(person);

  return (
    <tr
      data-cy="person"
      className={classNames({
        'has-background-warning':
          location.pathname === `/people/${currentPerson.slug}`,
      })}
    >
      <td>
        <PersonLink person={currentPerson} />
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      <td>
        <PersonLink person={currentPerson.mother} />
      </td>
      <td>
        <PersonLink person={currentPerson.father} />
      </td>
    </tr>
  );
};
