import { createContext } from 'react';

interface DataContextType {
	projects: any,
	setProjects: React.Dispatch<React.SetStateAction<never[]>>,
	gateways: any,
	setGateways: React.Dispatch<React.SetStateAction<never[]>>,
}

export const dataContext = createContext<DataContextType>({
	projects: [],
	setProjects: () => { },
	gateways: [],
	setGateways: () => { },
});