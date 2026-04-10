import React from 'react';
import { useLanguage } from './LanguageContext';
import type { ReactNode } from 'react';

// HOC to handle data loading state
export function withDataGuard<P extends object>(
    Component: React.ComponentType<P>
): React.FC<P> {
    return (props: P) => {
        const { data, loading } = useLanguage();

        if (loading || !data) {
            return (
                <div className="w-full h-full flex items-center justify-center min-h-[400px]">
                    <div className="text-neon-blue font-mono text-sm md:text-base animate-pulse">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-neon-blue rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-neon-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-neon-blue rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                            <span className="ml-2">LOADING_DATA...</span>
                        </div>
                    </div>
                </div>
            );
        }

        return <Component {...props} />;
    };
}

// Simple loading fallback component  
export const DataLoadingFallback: React.FC<{ children?: ReactNode }> = ({ children }) => {
    const { data, loading } = useLanguage();

    if (loading || !data) {
        return (
            <div className="w-full h-full flex items-center justify-center min-h-[400px]">
                <div className="text-neon-blue font-mono text-sm md:text-base animate-pulse">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-neon-blue rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-neon-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg- neon-blue rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                        <span className="ml-2">LOADING_DATA...</span>
                    </div>
                </div>
            </div>
        );
    }

    return <>{children}</>;
};
