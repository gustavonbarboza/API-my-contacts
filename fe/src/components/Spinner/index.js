import PropTypes from 'prop-types';

import { StylerdSpinner } from './styles';

export default function Spinner({ size }) {
  return <StylerdSpinner size={size} />;
}

Spinner.propTypes = {
  size: PropTypes.number,
};

Spinner.defaultProps = {
  size: 32,
};
