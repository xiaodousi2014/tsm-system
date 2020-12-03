const CryptoJS = require('crypto-js');  //引用AES源码js

const key = CryptoJS.enc.Utf8.parse("aegean6yhnaegean");  //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('aegean6yhnaegean');   //十六位十六进制数作为密钥偏移量

function Encrypt(data) { // 加密
  var encrypted = CryptoJS.AES.encrypt(data, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString(); // 返回的是base64格式的密文
}
function Decrypt(encrypted) { // 解密
  let decrypted = CryptoJS.AES.decrypt(encrypted, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypted.toString(CryptoJS.enc.Utf8); //
}

export default {
  Decrypt ,
  Encrypt
}
