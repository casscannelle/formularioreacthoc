import React, { useState } from 'react';

const withEventLogging = (WrappedComponent) => {
  return (props) => {
    const [eventLog, setEventLog] = useState([]);

    const logEvent = (eventName) => {
      const timestamp = new Date().toLocaleString();
      setEventLog((prevLog) => [...prevLog, `${timestamp}: ${eventName}`]);
    };

    const handleSubmit = (event, inputValue) => {
      logEvent('Form Submitted');
      props.onSubmit(inputValue);
    };

    return <WrappedComponent {...props} handleSubmit={handleSubmit} eventLog={eventLog} />;
  };
};

export default withEventLogging;