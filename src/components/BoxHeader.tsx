import { Box, Typography, useTheme } from '@mui/material';
import FlexBetween from './FlexBetween';

interface IProps {
	title: string;
	percent: number;
	description?: string;
}

const BoxHeader = ({ title, description, percent }: IProps) => {
	const { palette } = useTheme();

	return (
		<FlexBetween
			color={palette.grey[400]}
			sx={{ paddingX: 2, paddingTop: 2 }}
		>
			<Box>
				<Typography variant='h4'>{title}</Typography>
				<Typography
					variant='h6'
					color={palette.grey[700]}
				>
					{description}
				</Typography>
			</Box>
			<Box>
				<Typography
					variant='h5'
					color={palette.secondary[500]}
				>
					+{percent}%
				</Typography>
			</Box>
		</FlexBetween>
	);
};

export default BoxHeader;
