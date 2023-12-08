export const insertDynamicRouteParam = (route: string, param: string, value: string): string => {
    return route.replace(`[${param}]`, value);
};
