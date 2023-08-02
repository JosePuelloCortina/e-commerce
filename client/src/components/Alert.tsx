import { useState, useEffect } from 'react'

type AlertProps = {
  message: string | undefined;
  type: string;
};

function Alert({message, type} : AlertProps){

  const [ showAlert, setShowAlert] = useState(false)
  
  useEffect(() => {
    if (message) {
      setShowAlert(true);
    } 
  }, [message]);

  const handleCloseAlert = () => {
    setShowAlert(false)
  }
  return (
    <>
      {showAlert && (
        <div className={`bg-${type}-100 border border-${type}-400 text-${type}-700 px-4 py-3 rounded relative`} role="alert">
          <strong className="font-bold">{message}</strong>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={handleCloseAlert}>
            <svg className={`fill-current h-6 w-6 text-${type}-500`} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
            </svg>
          </span>
        </div>
      )}
    </>
  );
};

export default Alert;