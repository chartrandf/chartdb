import { createContext } from 'react';
import { emptyFn } from '@/lib/utils';

export type ImageType = 'png' | 'jpeg' | 'svg';
export interface ExportImageContext {
    exportImage: (type: ImageType) => Promise<void>;
}

export const exportImageContext = createContext<ExportImageContext>({
    exportImage: emptyFn,
});