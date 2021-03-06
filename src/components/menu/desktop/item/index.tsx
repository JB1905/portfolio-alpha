import { Link } from 'gatsby';

interface Props {
  readonly link: string;
  readonly title: string;
}

const Desktop = ({ link, title }: Props) => (
  <li>
    <Link to={link} activeClassName="active">
      {title}
    </Link>
  </li>
);

export default Desktop;
