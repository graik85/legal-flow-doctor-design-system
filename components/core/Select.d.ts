import React from 'react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  label?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: (string | SelectOption)[];
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  helperText?: string;
  errorText?: string;
  required?: boolean;
  id?: string;
  name?: string;
  style?: React.CSSProperties;
}

export declare function Select(props: SelectProps): JSX.Element;
