import { useMemo } from 'react';
import { useGetKpisQuery, useGetProductsQuery } from '@/state/api';
import { useTheme } from '@mui/system';

import DashboardGridBox from '@/components/DashboardGridBox';
import {
	ResponsiveContainer,
	CartesianGrid,
	Line,
	LineChart,
	XAxis,
	YAxis,
	Tooltip,
} from 'recharts';

import BoxHeader from '@/components/BoxHeader';

const GridRow2 = () => {
	const { data: productData } = useGetProductsQuery();
	const { data: operationalData } = useGetKpisQuery();
	const { palette } = useTheme();

	const opirationalOrNonData = useMemo(
		() =>
			operationalData &&
			operationalData[0].monthlyData.map(
				({ month, operationalExpenses, nonOperationalExpenses }) => ({
					name: month.slice(0, 3),
					operationalExpenses,
					nonOperationalExpenses,
				}),
			),
		[operationalData],
	);
	const productsMemo = useMemo(
		() =>
			productData &&
			productData.map(({ price, expense }) => ({
				price,
				expense,
			})),
		[productData],
	);

	return (
		<>
			<DashboardGridBox gridArea='d'>
				<BoxHeader
					title={'Operational vs Non-Operational expenses'}
					percent={4}
				/>
				<ResponsiveContainer
					width='100%'
					height='100%'
				>
					<LineChart
						data={opirationalOrNonData}
						margin={{
							top: 20,
							right: 0,
							left: 0,
							bottom: 30,
						}}
					>
						<CartesianGrid
							vertical={false}
							horizontal={true}
							stroke={palette.grey[800]}
						/>
						<XAxis
							dataKey='name'
							fontSize={10}
							tickLine={false}
							axisLine={false}
						/>
						<YAxis
							yAxisId='left'
							fontSize={10}
							tickLine={false}
							axisLine={false}
						/>
						<YAxis
							yAxisId='right'
							orientation='right'
							fontSize={10}
							tickLine={false}
							axisLine={false}
						/>
						<Tooltip />
						<Line
							dataKey='nonOperationalExpenses'
							yAxisId='left'
							type='monotone'
							stroke={palette.primary[200]}
							dot={true}
						/>
						<Line
							dataKey='operationalExpenses'
							yAxisId='right'
							type='monotone'
							stroke={palette.secondary[200]}
							dot={true}
						/>
					</LineChart>
				</ResponsiveContainer>
			</DashboardGridBox>
			<DashboardGridBox gridArea='e'></DashboardGridBox>
			<DashboardGridBox gridArea='f'></DashboardGridBox>
		</>
	);
};

export default GridRow2;
