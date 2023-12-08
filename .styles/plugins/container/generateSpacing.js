import { parseBreakpoints } from '../../utils';

export default (theme, spacing) => {
    return parseBreakpoints(theme, spacing, (value) => {
        return {
            '--container-spacing': theme(`spacing.${value}`),
        };
    });
};
