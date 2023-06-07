import PropTypes from 'prop-types';
import './SupportImage.css';

export const SupportImage = ({className, alt, src}) => {
  return (
    <aside>
        <img className={className} alt={alt} src={src} />   
    </aside>
  )
}
SupportImage.propTypes = {
  className: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};