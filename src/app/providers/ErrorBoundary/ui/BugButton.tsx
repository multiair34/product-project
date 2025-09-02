import {Button} from "shared/ui/Button/Button";
import {useEffect, useState} from "react";

export const BugButton = () => {
  const [error, setError] = useState(false);
  const onThrowError = () => {
    setError(true);
  }
  useEffect(() => {
    if(error) {
      throw new Error("sad")
    }
  }, [error]);
  return (
    <Button onClick={onThrowError}>
      Throw Error
    </Button>
  );
};