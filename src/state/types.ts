export interface IGetKpisResponse {
	id: string;
	_id: string;
	__v: number;
	createdAt: string;
	updatedAt: string;
	totalProfit: number;
	totalRevenue: number;
	totalExpenses: number;
	monthlyData: IMonthlyData[];
	dailyData: Array<IDaylyData>;
}

interface IMonthlyData {
	id: string;
	_id: string;
	month: string;
	revenue: number;
	expenses: number;
	operationalExpenses: number;
	nonOperationalExpenses: number;
}
interface IDaylyData {
	id: string;
	_id: string;
	date: string;
	revenue: number;
	expenses: number;
}

export interface IGetProductsResponse {
	id: string;
	_id: string;
	__v: number;
	price: number;
	expense: number;
	transactions: Array<string>;
	createdAt: string;
	updatedAt: string;
}
