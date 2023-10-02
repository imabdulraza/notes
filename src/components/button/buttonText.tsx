import React from 'react';
import { Button } from '@mui/material';
import { navMenuItems } from '@services/constants';

type ButtonProps = {
    children: string;
    className?: string;
    onClick: () => void;
};

const ButtonText: React.FC<ButtonProps> = ({ onClick, children, className }) => {
    return (
        <Button
            variant="text"
            className={className ? className : ''}
            onClick={onClick}
        >
            {children}
        </Button>
    )
};

export default ButtonText;