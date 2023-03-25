declare module 'react-loadsvg' {
    import { ReactNode } from 'react';

    export interface LoadSVGProps {
        size?: number;
        stroke?: number;
        backStroke?: number;
        duration?: number;
        lineCap?: 'butt' | 'round' | 'square';
        color?: string;
        backColor?: string;
    }

    export default function LoadSVG(props: LoadSVGProps): ReactNode;
}