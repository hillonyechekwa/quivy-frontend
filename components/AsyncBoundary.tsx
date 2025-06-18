import {Suspense, ReactNode} from 'react';
import { ErrorBoundary } from './ErrorBoundary';

type Props = {
    loadingFallback?: ReactNode
    errorFallback?: ReactNode
    children: ReactNode
}


export function AsyncBoundary ({
    loadingFallback = <p>Loading...</p>,
    errorFallback = <p>Something went wrong</p>,
    children 
}: Props) {
    return(
        <ErrorBoundary fallback={errorFallback}>
            <Suspense fallback={loadingFallback}>
                {children}
            </Suspense>
        </ErrorBoundary>
    )
}