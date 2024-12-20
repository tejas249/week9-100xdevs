import React, { useState } from 'react'; // Import useState

const Toggle = () => {
    const [notificationCount, SetNotificationCount] = useState(0);
    console.log("re-renders");
    function increment(){
        SetNotificationCount(notificationCount+1);
    }


    return (
        <div>
            <button onClick={increment}>
                Increase Count
            </button>
            <h2>{notificationCount}</h2>
        </div>
    );
};

export default Toggle;
