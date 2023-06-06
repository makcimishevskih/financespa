import { useTheme } from '@mui/system';

import { Box, useMediaQuery } from '@mui/material';

import DashboardGridBox from '@components/DashboardGridBox';
// import {
// 	gridTemplateLargeScreens,
// 	gridTemplateSmallScreens,
// } from './grid-template-areas';

interface IProps {}

export const gridTemplateLargeScreens = `
										"a b c" 
										"a b c"
										"a b c"
										"a b f"
										"d e f"
										"d e f"
										"d h i"
										"g h i"
										"g h j"
										"g h j"
										`;
export const gridTemplateSmallScreens = `
										"a" 
										"a"
										"a"
										"a"
										"b"
										"b"
										"b"
										"b"
										"c"
										"c"
										"c"
										"d"
										"d"
										"d"
										"e"
										"e"
										"f"
										"f"
										"f"
										"g"
										"g"
										"g"
										"h"
										"h"
										"h"
										"h"
										"i"
										"i"
										"j"
										"j"
										`;

const Dashboard = (props: IProps) => {
	const isAboveMediumSreens = useMediaQuery('(min-width:1220px');

	const { palette } = useTheme();

	return (
		<Box
			width='100%'
			height='100%'
			color={palette.grey[300]}
			sx={
				isAboveMediumSreens
					? {
							display: 'grid',
							gap: '1.5rem',
							gridTemplateAreas: gridTemplateLargeScreens,
							gridTemplateColumns: 'repeat(3, minmax(370px, 1fr))',
							gridTemplateRows: 'repeat(10, minmax(60px, 1fr))',
					  }
					: {
							display: 'grid',
							gap: '1.5rem',
							gridAutoRows: '80px',
							gridTemplateColumns: '1fr',
							gridTemplateAreas: gridTemplateSmallScreens,
					  }
			}
		>
			<DashboardGridBox gridArea='a'></DashboardGridBox>
			<DashboardGridBox gridArea='b'></DashboardGridBox>
			<DashboardGridBox gridArea='c'></DashboardGridBox>
			<DashboardGridBox gridArea='d'></DashboardGridBox>
			<DashboardGridBox gridArea='e'></DashboardGridBox>
			<DashboardGridBox gridArea='f'></DashboardGridBox>
			<DashboardGridBox gridArea='g'></DashboardGridBox>
			<DashboardGridBox gridArea='h'></DashboardGridBox>
			<DashboardGridBox gridArea='i'></DashboardGridBox>
			<DashboardGridBox gridArea='j'></DashboardGridBox>
		</Box>
	);
};

export default Dashboard;
