export interface IInsuranceProviders {
    name: string;
    cashLess: boolean;
    dailyLimit: number;
    coverage: number;
    activeFrom: Date;
}