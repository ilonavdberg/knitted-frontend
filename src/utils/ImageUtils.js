
export function generateImage(base64Image, extension) {
    switch (extension) {
        case 'jpg':
            return `data:image/jpg;base64,${base64Image}`;
        case 'jpeg':
            return `data:image/jpeg;base64,${base64Image}`;
        case 'png':
            return `data:image/png;base64,${base64Image}`;
        default:
            console.log('extension not supported');
    }
    //dirty bug fix: png not recognized in the switch; so I've added this at the end
    return `data:image/png;base64,${base64Image}`;
}