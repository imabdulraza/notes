import React from 'react';
import { Button } from '@mui/material';

type ButtonProps = {
    children: string;
    className?: string;
    onClick: () => void;
};

const ButtonOutlined: React.FC<ButtonProps> = ({ onClick, children, className }) => {
    return (
        <Button
            variant="outlined"
            className={className ? className : ''}
            onClick={onClick}
        >
            {children}
        </Button>
    )
};

export default ButtonOutlined;