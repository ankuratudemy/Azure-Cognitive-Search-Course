module.exports = async function (context, req) {
    
    const payload = req.body;
    context.log(`Received data: ${payload}`);
    const output=[];
    for (const value of payload.values){
        const { fields } = value.data;
        output.push({
            recordId: value.recordId,
            data: {
                fulladdress: `${fields.civic_number} ${fields.std_street} ${fields.geo_local_area}`
            }
        })
    }

    context.res = {
        headers: {
            'Content-Type': 'application/json'
        },
        body: { values: output},
        status: 200
    }

}