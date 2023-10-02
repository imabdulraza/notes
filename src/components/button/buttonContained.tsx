import React from 'react';
import { Button } from '@mui/material';

type ButtonProps = {
    children: string;
    className?: string;
    onClick: () => void;
};

const ButtonContained: React.FC<ButtonProps> = ({ onClick, children, className }) => {
    return (
        <Button
            variant="contained"
            className={className ? className : ''}
            onClick={onClick}
        >
            {children}
        </Button>
    )
};

export default ButtonContained;