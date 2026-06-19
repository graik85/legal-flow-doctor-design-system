import React from 'react';

export interface CardProps {
  /** Surface treatment */
  variant?: 'default' | 'inset' | 'emphasis' | 'accent' | 'gold';
  /** Inner padding preset */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Enable lift animation on hover */
  hover?: boolean;
  /** Accent-color left border: 'teal' | 'gold' | 'danger' | 'navy' | any CSS color */
  accent?: string | null;
  /** Renders a styled card header row */
  header?: React.ReactNode;
  /** Renders a muted card footer row */
  footer?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export declare function Card(props: CardProps): JSX.Element;
