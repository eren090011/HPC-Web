import { createHash } from 'crypto';

function hashName(name, invert) {
    const secret = 'SECRET_KEY'
    var input = `${secret}${name}`
    if (invert)
        input = `${name} ${secret}`
    var binaryHash = createHash("md5").update(input).digest();

    var base64Value = Buffer.from(binaryHash).toString('base64');
    
    return base64Value.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

export default hashName