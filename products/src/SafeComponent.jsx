import React, { Component } from "react";

class SafeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error) {
        // Update state to show fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log error details for debugging
        console.error("Error caught by SafeComponent:", error, errorInfo);
        this.setState({ error, errorInfo });
    }

    handleRetry = () => {
        // Reset error state and attempt to re-render children
        this.setState({ hasError: false, error: null, errorInfo: null });
    };

    render() {
        const { hasError, error, errorInfo } = this.state;

        if (hasError) {
            return (
                <div>
                    <h3>Something went wrong.</h3>
                    <p>{error && error.toString()}</p>
                    <details style={{ whiteSpace: "pre-wrap" }}>
                        {errorInfo && errorInfo.componentStack}
                    </details>
                    <button onClick={this.handleRetry}>Retry</button>
                </div>
            );
        }

        // Render child components if no error
        return this.props.children;
    }
}

export default SafeComponent;
