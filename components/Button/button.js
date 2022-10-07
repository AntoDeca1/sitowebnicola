import classes from './button.module.css';
import Link from 'next/link';
import './button.module.css';
function Button({ children, type, className, onClick }) {
  return (
    <a
      href='##'
      onClick={onClick}
      className={`${classes['btn']} ${classes[type]} ${classes[className]}`}
    >
      <span className='btn-content'>{children}</span>
    </a>
  );
}

export default Button;
