import { useState, useEffect } from 'react';
import type { AppData } from '../types';

export const useDataLoader = (language: 'en' | 'fr'): { data: AppData | null; loading: boolean; error: Error | null } => {
    const [data, setData] = useState<AppData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/data/data-${language}.json`);

                if (!response.ok) {
                    throw new Error(`Failed to load data: ${response.statusText}`);
                }

                const jsonData = await response.json();
                setData(jsonData);
                setError(null);
            } catch (err) {
                console.error('Error loading data:', err);
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [language]);

    return { data, loading, error };
};
