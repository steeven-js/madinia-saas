import * as TablerIcons from '@tabler/icons-react';

// @types
import { DynamicIconProps } from '../types/tabler';

/**
 * Dynamic Icon Component
 * Renders a Tabler icon based on the provided name
 */
export default function DynamicIcon({ name, size = 20, color, stroke = 1.5 }: DynamicIconProps) {
  // Get the icon component from TablerIcons
  const IconComponent = TablerIcons[name] as React.ElementType;

  // Return the icon component with the provided props
  return IconComponent ? <IconComponent size={size} color={color} stroke={stroke} /> : null;
} 