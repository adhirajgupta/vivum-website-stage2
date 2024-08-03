import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

export default function EventComponent({ events, navigate }) {
    const handleRowClick = (event) => {

        navigate(`/sport/${event.name}`);
    };

    return (
        <React.Fragment>
            <Title>Events</Title>
            <Table size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {events && events.map((event) => (
                        <TableRow key={event.id} hover onClick={() => handleRowClick(event)} >
                            <TableCell>{event.day}</TableCell>
                            <TableCell>{event.name}</TableCell>
                            <TableCell>{event.location}</TableCell>
                            <TableCell>{event.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </React.Fragment>
    );
}
