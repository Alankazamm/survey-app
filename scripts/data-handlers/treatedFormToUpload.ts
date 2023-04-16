

export const treatedFormToUpload = (form: Array<string | string[]>) => {
    //create a object to be uploaded to the database
    const treatedForm = {
        name: form[0],
        email: form[1],
        age: form[2],
        status: form[3],
        market: form[4],
        invest: form[5],
        resources: form[6],
        details: form[7],
        date: form[8]
    }
    return treatedForm;
}
 