import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';
import { FormControl, Button } from '@mui/material';

const SearchInput = () => {
  const [value, setValue] = useState<string>('');
  const [showClearIcon, setShowClearIcon] = useState<string>('none');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setValue(e.target.value);
    setShowClearIcon(e.target.value.length < 1 ? 'none' : 'flex');
  };

  const onClickVisibleEndButton = (): void => {
    setValue('');
    setShowClearIcon('none');
  };

  const handleSearch = (): void => {
    // 검색 로직 추후작성
    console.log('Search:', value);
  };

  return (
    <FormControl margin="none" style={{ height: 32 }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          size="small"
          variant="outlined"
          placeholder="검색"
          onChange={handleChange}
          value={value}
          style={{ marginRight: 10 }}
          InputProps={{
            style: {
              borderRadius: '5px',
              height: 28,
            },
            endAdornment: (
              <InputAdornment
                style={{ display: showClearIcon }}
                position="end"
                onClick={onClickVisibleEndButton}
              >
                <ClearIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          style={{ textTransform: 'none', fontWeight: 'bold', height: 27, backgroundColor: '#0648D9'}}
        >
          Search
        </Button>
      </div>
    </FormControl>
  );
};

export default SearchInput;
