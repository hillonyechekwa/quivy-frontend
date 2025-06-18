'use client'

import {Component,  ErrorInfo,  ReactNode} from 'react'

type Props = {
    fallback: ReactNode
    children: ReactNode
}


type State = {
    hasError: boolean
    error: Error | null
}


export class ErrorBoundary extends Component<Props, State> {
    constructor (props: Props){
        super(props)
        this.state = {hasError: false, error: null}
    }

    static getDerivedStateFromError(error: Error): State {
        return {hasError: true, error}
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log('Uncaught Error:', error, errorInfo)
    }

    render() {
        if(this.state.hasError){
            return this.props.fallback
        }

        return this.props.children
    }
}