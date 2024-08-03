import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormComponent from './components/FormComponent';
import { Typography } from '@mui/material';

export default function Sports() {
    const { id } = useParams(); // Access id parameter from URL
    const [teamMemberCount, setTeamMemberCount] = useState(0);

    useEffect(() => {
        // Function to determine teamMemberCount based on id parameter
        const getTeamMemberCount = () => {
            switch (id.toLowerCase()) {
                case 'basketball':
                    return 5;
                case 'football':
                    return 11;
                case 'tennis':
                    return 2;
                default:
                    return 0;
            }
        };

        // Set teamMemberCount based on id when component mounts
        setTeamMemberCount(getTeamMemberCount());
    }, [id]);

    return (

        !teamMemberCount == 0 ? (
            <div>
                <FormComponent teamMemberCount={teamMemberCount} />
            </div>
        ) : (
            <Typography>
                There was an error. Please go back to the previous page and try again
            </Typography>
        )

    );
}
