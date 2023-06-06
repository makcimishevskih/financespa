import { useState } from 'react';

import { Box, Typography, useTheme } from '@mui/material';
import PixIcon from '@mui/icons-material/Pix';
import { Link } from 'react-router-dom';
import FlexBetween from '@/components/FlexBetween';

interface IProps {}

type ILabelRoutes = '/' | '/predictions';
type ILabels = 'Dashboard' | 'Predictions';

interface IRoutes {
	to: ILabelRoutes;
	label: ILabels;
}

const Navbar = (props: IProps) => {
	const [selected, setSelected] = useState('dashboard');

	const { palette } = useTheme();

	const routes: IRoutes[] = [
		{
			to: '/',
			label: 'Dashboard',
		},
		{
			to: '/predictions',
			label: 'Predictions',
		},
	];

	const renderRoutes = routes.map(({ to, label }) => (
		<Box
			key={to}
			sx={{
				'&:hover': {
					color: palette.primary[100],
				},
			}}
		>
			<Link
				to={to}
				onClick={() => setSelected(to)}
				style={{
					color: selected === to ? 'inherit' : palette.grey[700],
					textDecoration: 'inherit',
				}}
			>
				{label}
			</Link>
		</Box>
	));

	return (
		<FlexBetween
			mb='0.25rem'
			p='0.5rem 0rem'
			color={palette.grey[300]}
		>
			{/* left */}
			<FlexBetween gap='0.75rem'>
				<PixIcon sx={{ fontSize: 28 }} />
				<Typography
					variant='h4'
					fontSize='16px'
				>
					Finanseer
				</Typography>
			</FlexBetween>
			{/* right */}
			<FlexBetween gap='2rem'>{renderRoutes}</FlexBetween>
		</FlexBetween>
	);
};

export default Navbar;
