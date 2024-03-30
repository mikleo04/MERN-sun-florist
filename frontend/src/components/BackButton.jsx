import React from 'react';
import {Link} from "react-router-dom";
import {IconChevronsLeft} from "@tabler/icons-react";

const BackButton = ({destination = '/admin'}) => {
    return (
        <Link to={destination} >
            <button type="button" className="absolute start-0 top-0 mt-5 ms-5 gap-2 text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary">
                <IconChevronsLeft/>
                Back
            </button>
        </Link>
    );
};

export default BackButton;