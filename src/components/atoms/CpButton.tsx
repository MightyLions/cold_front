import { useEffect } from 'react';
import Button from '@mui/material/Button';

// interface IButton {
//   onClick: Function;
// }

// const useButton = () => {
//   const {} = useState();
// };

interface buttonProps {
  name?: string;
  value?: any;
  onclick?: () => {};
}

export default ({ name, value, onclick }: buttonProps) => {
  useEffect(() => {}, []);
  return (
    <Button variant="text" value={value} onClick={onclick}>
      {name ? name : 'undefined'}
    </Button>
  );
};
