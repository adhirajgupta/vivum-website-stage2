import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import FormComponent from './components/FormComponent';
import { Typography } from '@mui/material';
import { convertPathName } from '../../Constants';

export default function Sports() {
    const { id } = useParams(); // Access id parameter from URL
    const [teamMemberCount, setTeamMemberCount] = useState(0);
    const [searchParams] = useSearchParams();

    const eventData = {
        name: searchParams.get('name') || "TBD",
        location: searchParams.get('location') || "TBD",
        date: searchParams.get('date') || "TBD",
        time: searchParams.get('time') || "TBD",
        description: searchParams.get('description') == "undefined" ? "No description available" : searchParams.get('description')
    };

    console.log(typeof eventData.description)

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
                    return 13;
                case 'football boys':
                case 'football girls':
                    return 17;
                case 'hockey boys':
                case 'hockey girls':
                    return 16;
                case 'volleyball boys':
                case 'volleyball girls':
                case 'throwball girls':
                    return 12;
                case 'tennis boys':
                case 'tennis girls':
                case 'badminton boys':
                case 'badminton girls':
                case 'table tennis boys':
                case 'table tennis girls':
                    return 4;
                case "athletics boys":
                case "athletics girls":
                    return 5;
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
                <FormComponent teamMemberCount={teamMemberCount} sport={id.toLowerCase()} eventData={eventData} />
            </div>
        ) : (
            <Typography>
                There was an error. Please go back to the previous page and try again
            </Typography>
        )

    );
}
