import { getComponentProp } from '$utilities';
import clsx from 'clsx';

import type {
    TButtonHorizontalAlign,
    TButtonHorizontalAlignBreakpoints,
    TButtonHorizontalAlignValues,
} from './Button.svelte';

/* TODO: refine or find a more simplistic way */
export const getHorizontalAlign = (value: TButtonHorizontalAlign) => {
    return getComponentProp<TButtonHorizontalAlignBreakpoints, TButtonHorizontalAlignValues>(
        value,
        (breakpoint, property) => {
            switch (property) {
                case 'left':
                    return clsx({
                        '500:justify-start': breakpoint === '500',
                    });

                case 'center':
                default:
                    return clsx({
                        'justify-center': breakpoint === 'DEFAULT',
                    });
            }
        }
    );
};
