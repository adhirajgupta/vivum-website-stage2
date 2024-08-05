import { useEffect } from 'react';
import { convertPathName } from '../../../Constants';

const useFieldValues = (formik, sport, setDataLoading) => {
    useEffect(() => {
        const getFieldValues = async () => {
            setDataLoading(true);
            const utoken = localStorage.getItem('utoken');
            if (utoken) {
                try {
                    const response = await fetch(`https://adityaiyer2k7.pythonanywhere.com/userdata?utoken=${utoken}`);
                    const data = await response.json();
                    const event = data.userdata.events[convertPathName(sport)];
                    if (event && event.roster.length !== 0) {
                        const updatedTeamMembers = event.roster.map(member => ({
                            firstName: member.firstName || "",
                            lastName: member.lastName || "",
                            dateOfBirth: member.dateOfBirth || "",
                        }));
                        updatedTeamMembers.forEach((member, index) => {
                            formik.setFieldValue(`teamMembers[${index}].firstName`, member.firstName);
                            formik.setFieldValue(`teamMembers[${index}].lastName`, member.lastName);
                            formik.setFieldValue(`teamMembers[${index}].dateOfBirth`, member.dateOfBirth);
                        });
                    }
                } catch (error) {
                    console.error("Failed to fetch - fetch returned error", error);
                } finally {
                    setDataLoading(false);
                }
            }
        };
        getFieldValues();
    }, []); // Empty dependency array ensures this runs only once when the component mounts
};

export default useFieldValues;
