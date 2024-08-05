import * as Yup from 'yup';

export const validationSchema = Yup.object({
    teamMembers: Yup.array()
        .of(
            Yup.object({
                firstName: Yup.string().required('Required'),
                lastName: Yup.string().required('Required'),
                dateOfBirth: Yup.date().required('Required'),
            })
        )
        .required('Required'),
});
