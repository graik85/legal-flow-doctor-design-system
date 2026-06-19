import React from 'react';

export interface BadgeProps {
  /** Color / semantic meaning */
  variant?: 'default' | 'active' | 'pending' | 'closed' | 'review' | 'urgent' | 'teal' | 'navy' | 'gold';
  /** Size preset */
  size?: 'sm' | 'md' | 'lg';
  /** Show a small colored dot before the label */
  dot?: boolean;
  children?: React.ReactNode;
}

export declare function Badge(props: BadgeProps): JSX.Element;
