import { useState } from 'react';
import ErrorMessage from '../ErrorMessage'

const useErrorMessage = () => {
  const [message, setMessage] = useState(null);

  return {
    ErrorMessage: () => <ErrorMessage message={message} />,
    setErrorMessage: message => setMessage(message)
  }
}
export default useErrorMessage;
