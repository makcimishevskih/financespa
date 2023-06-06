import { FC, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { CssBaseline, Box } from '@mui/material';
import { themeSettings } from './theme';

import NavBar from '@/scenes/navbar';
import Dashboard from './scenes/dashboard';
import Predictions from './scenes/predictions';

const App: FC = () => {
	const theme = useMemo(() => createTheme(themeSettings), []);

	return (
		<div className='app'>
			<Router>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Box
						width='100%'
						height='100%'
						padding='1rem 2rem 4rem 2rem'
					>
						<NavBar></NavBar>

						<Routes>
							<Route
								path='/'
								element={<Dashboard />}
							/>
							<Route
								path='/predictions'
								element={<Predictions />}
							/>
						</Routes>
					</Box>
				</ThemeProvider>
			</Router>
		</div>
	);
};

export default App;
