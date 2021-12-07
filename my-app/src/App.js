import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import HomeView from './views/HomeView/HomeView';
import AuthorsView from './views/AuthorsView/AuthorsView';
import BooksView from './views/BooksView/BooksView';
import BookDetailsView from './views/BookDetailsView/BookDetailsView';
import TableView from './views/TableView/TableView';
import NotFoundView from './views/NotFoundView/NotFoundView';

import './App.css';

export default function App() {
	return (
		<Container>
			<AppBar />
			<Switch>
				<Route path='/' exact>
					<HomeView />
				</Route>

				<Route path='/authors'>
					<AuthorsView />
				</Route>

				<Route path='/books' exact>
					<BooksView />
				</Route>

				<Route path='/books/:bookId'>
					<BookDetailsView />
				</Route>
				<Route path='/table'>
					<TableView />
				</Route>
				<Route>
					<NotFoundView />
				</Route>
			</Switch>
		</Container>
	);
}
