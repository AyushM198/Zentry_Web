import React from 'react';

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
    return (
        <button
            id={id}
            className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black flex items-center gap-2 ${containerClass}`}
        >
            {leftIcon && <span className="icon-left">{leftIcon}</span>}

            <span className="relative font-semibold text-xs uppercase">
                {title}
            </span>

            {rightIcon && <span className="icon-right">{rightIcon}</span>}
        </button>
    );
};

export default Button;
