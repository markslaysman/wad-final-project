import { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";

function LoadingPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
        navigate('/moviereview');
    }, []);
    

    return (
        <div>
            
        </div>
    );
}

export default LoadingPage;