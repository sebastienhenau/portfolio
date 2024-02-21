import { getComponentProp } from '$utilities';
import clsx from 'clsx';

import type {
    TButtonHorizontalAlign,
    TButtonHorizontalAlignBreakpoints,
    TButtonHorizontalAlignValues,
} from './Button.svelte';

export const getHorizontalAlign = (value: TButtonHorizontalAlign) => {
    return getComponentProp<TButtonHorizontalAlignBreakpoints, TButtonHorizontalAlignValues>(
        value,
        (breakpoint, property) => {
            switch (property) {
                case 'left':
                    return clsx({
                        '500:justify-start': breakpoint === 500,
                    });
                    break;

                case 'center':
                    return clsx({
                        'justify-center': breakpoint === 'DEFAULT',
                    });
                    break;
            }
        }
    );
};
