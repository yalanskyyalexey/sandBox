import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
	<nav>
		<NavLink
			exact
			to='/'
			className={styles.link}
			activeClassName={styles.activeLink}
		>
			Main
		</NavLink>
		<NavLink
			to='/books'
			className={styles.link}
			activeClassName={styles.activeLink}
		>
			Books
		</NavLink>
		<NavLink
			to='/autors'
			className={styles.link}
			activeClassName={styles.activeLink}
		>
			Autors
		</NavLink>
	</nav>
);

export default Navigation;
