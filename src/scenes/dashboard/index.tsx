import { Box, useMediaQuery } from '@mui/material';

import {
	gridTemplateLargeScreens,
	gridTemplateSmallScreens,
} from './grid-template-areas';

import GridRow1 from './GridRow1';
import GridRow2 from './GridRow2';
import GridRow3 from './GridRow3';

// import { ReactNode } from 'react';
// --------- COLUMNS INSTEAD OF ROWS OR GENERAL GRID COMP
// --------- NEW OBJECT IGRIDBOX

// interface IGridBox {
// 	area: string;
// 	label: ReactNode;
// }
// let gridAreas: Array<string> = [
// 	'a',
// 	'b',
// 	'c',
// 	'd',
// 	'e',
// 	'f',
// 	'g',
// 	'h',
// 	'i',
// 	'j',
// ];

// const renderGridBox = gridAreas.map((grid) => (
// 	<DashboardGridBox
// 		key={grid}
// 		gridArea={grid}
// 	/>
// ));
//  const gridTemplateLargeScreens = `
// 										"a b c"
// 										"a b c"
// 										"a b c"
// 										"a b f"
// 										"d e f"
// 										"d e f"
// 										"d h i"
// 										"g h i"
// 										"g h j"
// 										"g h j"
// 										`;
//  const gridTemplateSmallScreens = `
// 										"a"
// 										"a"
// 										"a"
// 										"a"
// 										"b"
// 										"b"
// 										"b"
// 										"b"
// 										"c"
// 										"c"
// 										"c"
// 										"d"
// 										"d"
// 										"d"
// 										"e"
// 										"e"
// 										"f"
// 										"f"
// 										"f"
// 										"g"
// 										"g"
// 										"g"
// 										"h"
// 										"h"
// 										"h"
// 										"h"
// 										"i"
// 										"i"
// 										"j"
// 										"j"
// 										`;

const Dashboard = () => {
	const isAboveMediumSreens = useMediaQuery('(min-width:1220px');

	return (
		<Box
			width='100%'
			height='100%'
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
			<GridRow1 />
			<GridRow2 />
			<GridRow3 />
		</Box>
	);
};

export default Dashboard;
