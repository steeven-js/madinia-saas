import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

/**
 * Composant d'indicateur de chargement
 */
export default function LoadingSpinner({ 
  size = 'md', 
  color = 'text-indigo-600' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <div className={`animate-spin rounded-full border-t-2 border-b-2 ${color} ${sizeClasses[size]}`}></div>
        <p className="mt-4 text-gray-700 font-medium">Chargement...</p>
      </div>
    </div>
  );
} 