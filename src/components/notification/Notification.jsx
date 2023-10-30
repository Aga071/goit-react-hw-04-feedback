import PropTypes from 'prop-types';
export default function Notification({ message }) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
