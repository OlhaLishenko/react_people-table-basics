import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Person } from '../types';

type PersonLinkProps = {
  person?: Person;
};

export const PersonLink: React.FC<PersonLinkProps> = ({ person }) => {
  if (!person || !person.name || person.name.trim() === '') {
    return <span>-</span>;
  }

  if (person && !person.slug) {
    return <span>{person.name}</span>;
  }

  return (
    <span>
      <Link
        to={`./${person.slug}`}
        className={classNames({
          'has-text-danger': person.sex === 'f',
        })}
      >
        {person.name}
      </Link>
    </span>
  );
};
