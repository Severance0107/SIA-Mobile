export function dataForm(json) {
    //se agregó un .toString porque cuando es un number genera error al encriptar.
    let formData = new FormData();
   
    for (let a in json) {
    if (a === 'FILE' && json[a] !== '') {
    if (Array.isArray(json[a])) {
    json[a].forEach(function (image, i) {
    formData.append(a.toLowerCase() + '[' + image.PROVEEDOR + ']', image);
    });
    } else {
    formData.append(a, json[a]);
    }
    }
    if (json[a] !== '' && json[a] !== null && json[a] !== undefined && json[a] !== 'undefined' && a !== 'FILE') {
    formData.append(encryptAes(a), (Array.isArray(json[a])) ?
    encryptAes(JSON.stringify(json[a])) : isValidDate(json[a]) ? encryptAes((new Date(json[a]).toISOString().split('T')[0])) : encryptAes((json[a]).toString()));
    }
    }
   
    return formData;
   }