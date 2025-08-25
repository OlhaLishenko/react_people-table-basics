import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Person } from '../types';

type PersonLinkProps = {
  person?: Person | null;
};

export const PersonLink: React.FC<PersonLinkProps> = ({ person }) => {
  // const { peopleList } = useContext(PeopleContext);

  if (!person) {
    return <span>-</span>;
  }

  // const slug = `${currentPerson.name.toLowerCase().split(' ').join('-')}-${currentPerson.born}`;

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
