export const getProjectName = (projectId: any, projects: any) => {
	const project = projects.find((project: any) => project.projectId === projectId);
	return project ? project.name : '';
};


export const getGatewayName = (gatewayId: any, gateways: any) => {
	const gateway = gateways.find((gateway: any) => gateway.gatewayId === gatewayId);
	return gateway ? gateway.name : '';
};