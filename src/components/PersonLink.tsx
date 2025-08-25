import { Link } from 'react-router-dom';
import { PeopleContext } from '../store/PeopleContext';
import { useContext } from 'react';
import classNames from 'classnames';
import { Person } from '../types';

type PersonLinkProps = {
  name?: string | null;
};

export const PersonLink: React.FC<PersonLinkProps> = ({ name }) => {
  const { peopleList } = useContext(PeopleContext);

  if (!name) {
    return <span>-</span>;
  }

  const currentPerson: Person = peopleList.filter(
    person => person.name === name,
  )[0];

  if (!currentPerson) {
    return <span>{name}</span>;
  }

  const slug = `${currentPerson.name.toLowerCase().split(' ').join('-')}-${currentPerson.born}`;

  return (
    <span>
      <Link
        to={`./${slug}`}
        className={classNames({
          'has-text-danger': currentPerson.sex === 'f',
        })}
      >
        {currentPerson.name}
      </Link>
    </span>
  );
};
