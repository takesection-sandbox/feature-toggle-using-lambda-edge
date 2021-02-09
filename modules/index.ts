export const handler = async function(event: any, context: any) {
    const request = event.Records[0].cf.request;
    const headers = request.headers;

    console.log(JSON.stringify(request));
    console.log(JSON.stringify(headers));

    request.uri = "/sub/index.html";
    return request;
}
