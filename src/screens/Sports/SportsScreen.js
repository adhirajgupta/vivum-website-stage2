import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormComponent from './components/FormComponent';
import { Typography } from '@mui/material';
import { convertPathName } from '../../Constants';

export default function Sports() {
    const { id } = useParams(); // Access id parameter from URL
    const [teamMemberCount, setTeamMemberCount] = useState(0);

    useEffect(() => {
        console.log(id)
        // Function to determine teamMemberCount based on id parameter
        const getTeamMemberCount = () => {
            console.log(id.toLowerCase())
            switch (id.toLowerCase()) {
                case 'basketball boys':
                    return 5;
                case 'football boys':
                    return 11;
                case 'football girls':
                    return 11;
                case "basketball girls":
                    return 5
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
                <FormComponent teamMemberCount={teamMemberCount} sport={id.toLowerCase()} />
            </div>
        ) : (
            <Typography>
                There was an error. Please go back to the previous page and try again
            </Typography>
        )

    );
}
