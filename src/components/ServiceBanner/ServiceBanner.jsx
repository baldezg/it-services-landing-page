import PropTypes from 'prop-types';
import './ServiceBanner.css';

export const ServiceBanner = ({className, title, paragraph, children}) => {
  return (
    <div className={`banner-container ${className}`}>
        <main>
            <h2>{title}</h2>
            <p>{paragraph}</p>
            <a href="#">Saiba mais...</a>
        </main>
        <aside>
          {children}
        </aside>
    </div>
  )
}

ServiceBanner.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default ServiceBanner