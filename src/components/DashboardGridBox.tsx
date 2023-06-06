import { Box, styled } from '@mui/material';

const DashboardGridBox = styled(Box)(({ theme }) => ({
	boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)',
	borderRadius: '1rem',
	backgroundColor: theme.palette.background.default,
}));

export default DashboardGridBox;
