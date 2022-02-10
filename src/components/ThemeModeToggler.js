import React from 'react';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';

const ThemeModeToggler = () => {
  const theme = useTheme();
  const { themeToggler } = theme;
  const { mode } = theme.palette;

  return (
    <Button
      variant={'text'}
      onClick={() => themeToggler()}
      aria-label="Dark mode toggler"
      color={mode === 'light' ? 'primary' : 'secondary'}
      sx={{
        borderRadius: 0,
        minWidth: 'auto',
        mr: 2,
        mt: 2,
        padding: 2,
        borderColor: alpha(theme.palette.divider, 0.2),
      }}
    >
      {mode === 'light' ? (
        <svg
          width={20}
          height={20}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        <svg
          width={20}
          height={20}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </Button>
  );
};

export default ThemeModeToggler;
