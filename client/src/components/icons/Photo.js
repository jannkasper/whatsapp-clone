import React from "react";

function SvgPhoto(props) {
    return (
        <span data-testid="status-image" data-icon="status-image" className="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 20" width="16" height="20" overflow="hidden" {...props}>
                <path fill="currentColor" d="M13.822 4.668H7.14l-1.068-1.09a1.068 1.068 0 0 0-.663-.278H3.531c-.214 0-.51.128-.656.285L1.276 5.296c-.146.157-.266.46-.266.675v1.06l-.001.003v6.983c0 .646.524 1.17 1.17 1.17h11.643a1.17 1.17 0 0 0 1.17-1.17v-8.18a1.17 1.17 0 0 0-1.17-1.169zm-5.982 8.63a3.395 3.395 0 1 1 0-6.79 3.395 3.395 0 0 1 0 6.79zm0-5.787a2.392 2.392 0 1 0 0 4.784 2.392 2.392 0 0 0 0-4.784z"></path>
            </svg>
        </span>
    )
}

export default SvgPhoto