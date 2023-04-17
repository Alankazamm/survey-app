import AWS from 'aws-sdk';
const s3 = new AWS.S3({
    accessKeyId: 'AKIA2TVF63K2NLSMQYIV',
    secretAccessKey: '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'
});
export const uploadFile = (data) => {
    //create a JSON file from the data
    const file = new Blob([JSON.stringify(data)], { type: 'application/json' });
    //the file name is surveys.json
    const params = {
        Bucket: 'survey-app-db',
        Key: 'surveys.json',
        Body: file
    };
    s3.putObject(params, function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Successfully uploaded data to ' + params.Bucket + '/' + params.Key);
        }
    });
};
