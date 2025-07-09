export const commonrequest = async (method, url, body) => {
    const requestOptions = {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };

    try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        return {
            status: response.status,
            data: data,
            success: data.success || false
        };
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
};