import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { PersonLink } from './PersonLink';
import { Person } from '../types';

type PersonItemProps = {
  person: Person;
};

export const PersonItem: React.FC<PersonItemProps> = ({ person }) => {
  const location = useLocation();
  const slug = `${person.name.toLowerCase().split(' ').join('-')}-${person.born}`;

  return (
    <tr
      data-cy="person"
      className={classNames({
        'has-background-warning': location.pathname === `/people/${slug}`,
      })}
    >
      <td>
        <PersonLink name={person.name} />
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      <td>
        <PersonLink name={person.motherName} />
      </td>
      <td>
        <PersonLink name={person.fatherName} />
      </td>
    </tr>
  );
};
