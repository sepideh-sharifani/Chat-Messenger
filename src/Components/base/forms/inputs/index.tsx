import cs from "classnames";
import React, { InputHTMLAttributes } from "react";

interface InputProps
    extends InputHTMLAttributes<HTMLInputElement>,
    React.PropsWithChildren {
    variant?: "search" | "secondary" | "info" | "send";
}

const { BaseTheme, SearchTheme, SendTheme } = {
    BaseTheme:
        "bg-white w-full rounded-md placeholder:p-1 placeholder:text-sm outline-none border-none",
    SearchTheme: "w-full bg-MainGreen-2 p-2 rounded-md text-lg placeholder:text-sm placeholder:text-gray-600 outline-none border-none",
    SendTheme: "bg-white w-full rounded-xl p-2 border-2 border-MainPurple-1 placeholder:text-sm outline-none border-none"
};

export const Input: React.FunctionComponent<InputProps> = (props) => {
    switch (props.variant) {
        case "search":
            return <input className={cs(SearchTheme)} {...props} />;
        case "secondary":
            return <input className={cs(BaseTheme)} {...props} />;
        case "info":
            return <input className={cs(BaseTheme)} {...props} />;
        case "send":
            return <input className={cs(SendTheme)} {...props} />
        default:
            return <input className={cs(BaseTheme)} {...props} />;
    }
};
