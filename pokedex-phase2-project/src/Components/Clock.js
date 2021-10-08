import React, {useState, useEffect} from 'react';

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);

        return function cleanup() {
            clearInterval(timer);
        }
    })

    return (
        time.toLocaleTimeString()
    );
}

export default Clock;