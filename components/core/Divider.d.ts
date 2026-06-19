import React from 'react';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  /** Optional centered text label (horizontal only) */
  label?: string;
  spacing?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

export declare function Divider(props: DividerProps): JSX.Element;
