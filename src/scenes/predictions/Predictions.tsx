import { useTheme } from '@mui/system';

import { Box } from '@mui/material';

interface IProps {}

const Predictions = (props: IProps) => {
	const { palette } = useTheme();

	return <Box color={palette.grey[300]}>Predictions</Box>;
};

export default Predictions;
