import { useGetKpisQuery } from '@/state/api';
import { useMemo } from 'react';
import { useTheme } from '@mui/material';

import {
	Area,
	XAxis,
	YAxis,
	Tooltip,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Line,
	Legend,
	LineChart,
	Bar,
	BarChart,
} from 'recharts';

import DashboardGridBox from '@/components/DashboardGridBox';
import BoxHeader from '@/components/BoxHeader';

const GridRow1 = () => {
	const { palette } = useTheme();

	const { data } = useGetKpisQuery();

	const revenueExpenses = useMemo(() => {
		return (
			data &&
			data[0].monthlyData.map(({ month, revenue, expenses }) => ({
				name: month.slice(0, 3),
				revenue,
				expenses,
			}))
		);
	}, [data]);

	const revenueProfit = useMemo(() => {
		return (
			data &&
			data[0].monthlyData.map(({ month, revenue, expenses }) => ({
				name: month.slice(0, 3),
				revenue,
				profit: (revenue - expenses).toFixed(),
			}))
		);
	}, [data]);
	const revenueMonthByMonth = useMemo(() => {
		return (
			data &&
			data[0].monthlyData.map(({ month, revenue }) => ({
				name: month.slice(0, 3),
				revenue,
			}))
		);
	}, [data]);

	return (
		<>
			<DashboardGridBox gridArea='a'>
				<BoxHeader
					title={'Revenue and Expenses'}
					description={
						'top line represents revenue, bottom line represents expenses'
					}
					percent={4}
				/>
				<ResponsiveContainer
					width='100%'
					height='100%'
				>
					<AreaChart
						width={730}
						height={250}
						data={revenueExpenses}
						margin={{ top: 15, right: 30, left: -10, bottom: 60 }}
					>
						<defs>
							<linearGradient
								id='colorRevenue'
								x1='0'
								y1='0'
								x2='0'
								y2='1'
							>
								<stop
									offset='0%'
									stopColor={palette.primary[300]}
									stopOpacity={0.8}
								/>
								<stop
									offset='95%'
									stopColor={palette.primary[300]}
									stopOpacity={0}
								/>
							</linearGradient>
							<linearGradient
								id='colorExpenses'
								x1='0'
								y1='0'
								x2='0'
								y2='1'
							>
								<stop
									offset='5%'
									stopColor={palette.secondary[300]}
									stopOpacity={0.8}
								/>
								<stop
									offset='95%'
									stopColor={palette.secondary[300]}
									stopOpacity={0}
								/>
							</linearGradient>
						</defs>
						<CartesianGrid strokeDasharray='0 1' />
						<XAxis
							dataKey='name'
							tickLine={false}
						/>
						<YAxis
							tickLine={false}
							domain={[8000, 23000]}
							style={{ fontSize: 10 }}
						/>
						<Tooltip />
						<Area
							dot={true}
							type='monotone'
							fillOpacity={1}
							dataKey='revenue'
							stroke={palette.primary.main}
							fill='url(#colorRevenue)'
						/>
						<Area
							dot={true}
							type='monotone'
							fillOpacity={1}
							dataKey='expenses'
							stroke={palette.secondary.main}
							fill='url(#colorExpenses)'
						/>
					</AreaChart>
				</ResponsiveContainer>
			</DashboardGridBox>

			<DashboardGridBox gridArea='b'>
				<BoxHeader
					title={'Profit and Revenue'}
					description={
						'top line represents revenue, bottom line represents expenses'
					}
					percent={4}
				/>
				<ResponsiveContainer
					width='100%'
					height='100%'
				>
					<LineChart
						layout='horizontal'
						data={revenueProfit}
						margin={{
							top: 10,
							right: 10,
							left: -10,
							bottom: 50,
						}}
						style={{ fontSize: 10 }}
					>
						<CartesianGrid
							vertical={false}
							strokeDasharray='1 0'
							fillOpacity={1}
							stroke={palette.grey[800]}
						/>
						ы
						<XAxis dataKey='name' />
						<YAxis
							yAxisId='left'
							axisLine={false}
						/>
						<YAxis
							axisLine={false}
							yAxisId='right'
							orientation='right'
						/>
						<Tooltip />
						<Legend
							height={20}
							wrapperStyle={{
								margin: '0 0 10px 0',
							}}
						/>
						<Line
							dot={true}
							yAxisId='left'
							type='monotone'
							dataKey='profit'
							stroke={palette.tertiary[500]}
						/>
						<Line
							yAxisId='right'
							dot={true}
							type='monotone'
							dataKey='revenue'
							stroke={palette.primary.main}
						/>
					</LineChart>
				</ResponsiveContainer>
			</DashboardGridBox>
			<DashboardGridBox gridArea='c'>
				<BoxHeader
					title={'Revenue Month by Month'}
					description={'graph representing the revenue month by month'}
					percent={4}
				/>
				<ResponsiveContainer
					width='100%'
					height='100%'
				>
					<BarChart
						data={revenueMonthByMonth}
						margin={{ top: 17, right: 25, left: -10, bottom: 58 }}
					>
						<defs>
							<linearGradient
								id='colorRevenue'
								x1='0'
								y1='0'
								x2='0'
								y2='1'
							>
								<stop
									offset='5%'
									stopColor={palette.primary[300]}
									stopOpacity={0.8}
								/>
								<stop
									offset='95%'
									stopColor={palette.primary[300]}
									stopOpacity={0}
								/>
							</linearGradient>
						</defs>
						<CartesianGrid
							vertical={false}
							stroke={palette.grey[800]}
						/>

						<XAxis
							dataKey='name'
							axisLine={false}
							tickLine={false}
							style={{ fontSize: 10 }}
						/>
						<YAxis
							axisLine={false}
							tickLine={false}
							style={{ fontSize: 10 }}
						/>
						<Tooltip />
						<Bar
							dataKey='revenue'
							fill='url(#colorRevenue)'
						/>
					</BarChart>
				</ResponsiveContainer>
			</DashboardGridBox>
		</>
	);
};

export default GridRow1;
