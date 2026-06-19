import React from 'react';

export interface TagProps {
  children?: React.ReactNode;
  /** Color palette */
  color?: 'default' | 'teal' | 'navy' | 'gold' | 'green' | 'amber' | 'red' | 'blue';
  /** Show an × remove button */
  removable?: boolean;
  onRemove?: () => void;
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

export declare function Tag(props: TagProps): JSX.Element;
