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
            const removeTrailingAB = (id.endsWith('A') || id.endsWith('B')) ? id.slice(0, -1) : id;
            console.log(removeTrailingAB)
            switch (removeTrailingAB.toLowerCase().trim()) {
                case 'basketball boys':
                case 'basketball girls':
                    return 5;
                case 'football boys':
                case 'football girls':
                    return 11;
                case 'hockey boys':
                case 'hockey girls':
                    return 11;
                case 'volleyball boys':
                case 'volleyball girls':
                case 'throwball girls':
                    return 6;
                case 'tennis boys':
                case 'tennis girls':
                case 'badminton boys':
                case 'badminton girls':
                case 'table tennis boys':
                case 'table tennis girls':
                    return 3;
                case "athletics boys":
                case "athletics girls":
                    return 4;
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
