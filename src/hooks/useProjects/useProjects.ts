import { projects } from "$content";

import type { TUseProjects } from "./useProjects.types";

export default (): TUseProjects => {
	const projectsAmount = projects.length;
	const latestProjects = [...projects].splice(0, 3);

	return {
		projects,
		projectsAmount,
		latestProjects,
	};
};
