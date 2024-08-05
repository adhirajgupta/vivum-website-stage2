import { useEffect } from 'react';
import { convertPathName } from '../../../Constants';

const useFieldValues = (formik, sport) => {
    useEffect(() => {
        const getFieldValues = async () => {
            const utoken = localStorage.getItem('utoken');
            if (utoken) {
                try {
                    const response = await fetch(`https://adityaiyer2k7.pythonanywhere.com/userdata?utoken=${utoken}`);
                    const data = await response.json();
                    console.log("data - ", data);

                    const event = data.userdata.events[convertPathName(sport)];
                    if (event && event.roster.length !== 0) {
                        console.log("executed the if condition");
                        const roster = event.roster;

                        const updatedTeamMembers = roster.map((member) => ({
                            firstName: member.firstName || " ",
                            lastName: member.lastName || " ",
                            dateOfBirth: member.dateOfBirth || " ",
                        }));

                        formik.setValues({
                            ...formik.values,
                            teamMembers: updatedTeamMembers,
                        });
                    } else {
                        console.log("No roster found for the event.");
                    }
                } catch (error) {
                    console.error("Failed to fetch - fetch returned error", error);
                }
            }
        };

        getFieldValues();
    }, [formik, sport]);
};

export default useFieldValues;
