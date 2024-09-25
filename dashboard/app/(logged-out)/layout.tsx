import React from "react"

type Props = {
    children?: React.ReactNode;
}

export default function LoggedOutLayout({ children }: Props) {
    return (
        <div className="flex felx-col min-h-screen justify-center items-center p-24">
            {children}
        </div>
    );
}
