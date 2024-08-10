import { convertPathName } from "../../../Constants";


export const generateQrCodes = async (teamMembers,sport) => {
    const utoken = localStorage.getItem('utoken')
    console.log('Generating QR Codes for team members', teamMembers);
    const promises = teamMembers.map(async (member) => {
        const endpoint = `https://vivum24.pythonanywhere.com/userdata/qr?utoken=${utoken}&sport=${sport}&fname=${member.firstName}&lname=${member.lastName}`;
        try {
            const response = await fetch(endpoint);
            console.log(`Response for ${member.firstName} ${member.lastName}:`, response);
            const data = await response.blob();
            console.log(`Blob data for ${member.firstName} ${member.lastName}:`, data);
            const imageObjectURL = URL.createObjectURL(data);
            return { ...member, qrCode: imageObjectURL };
        } catch (error) {
            console.error("Error fetching data:", error);
            return { ...member, qrCode: null };
        }
    });
    return Promise.all(promises);
};

export const sendFormData = async (formData, sport) => {
    let utoken = localStorage.getItem('utoken');
    console.log("utoken", utoken);
    formData.utoken = utoken;
    formData.sport = convertPathName(sport);
    const endpoint = 'https://vivum24.pythonanywhere.com/userdata/teamchange';

    console.log('Sending form data to endpoint:', endpoint);
    console.log('Form data:', formData);

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log('Response from server:', data);

        if (data.success) {
            console.log('Form data successfully sent');
        } else {
            console.error('Failed to send form data');
        }
    } catch (error) {
        console.error('Error sending form data:', error);
    }
};
