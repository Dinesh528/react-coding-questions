import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const ComponentCleanUp = () => {
  const [subscribed, setSubscribed] = useState(true);

  useEffect(() => {
    const doSubscribe = () => {
      console.log("Subscribe to component");
    };

    doSubscribe();

    const cleanup = () => {
      console.log("Unsubscribe from component");
    };

    return () => {
      cleanup();
    };
  }, []);

  const handleUnsubscribe = () => {
    setSubscribed(false);
  };

  const handleUnmount = () => {
    const root = document.getElementById("root"); 
    ReactDOM.unmountComponentAtNode(root);
  };

  return (
    <div>
      Clean Up Using Functional Component
      <div>
        {subscribed ? (
          <>
            <button onClick={handleUnsubscribe}>Unsubscribe</button>
          
          </>
        ) : (
          <p>Unsubscribed</p>
        )}
      </div>
    </div>
  );
};

export default ComponentCleanUp;
