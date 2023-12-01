import type { TProjects } from "$types";

// -----------------------------------------------------------------------------
// Return
// -----------------------------------------------------------------------------
export interface TUseProjects {
	projects: TProjects;
	projectsAmount: number;
	latestProjects: TProjects;
}
