import CryptoJS from 'crypto-js'

const secretKey = 'qwer1234asdf5678zxcv';

/**
 * 加密
 */
export const encrypt = (str) => {
  let key = CryptoJS.enc.Utf8.parse(secretKey);
  let srcs = CryptoJS.enc.Utf8.parse(str);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}

/**
 * 解密
 */
export const decrypt = (str) => {
  let key = CryptoJS.enc.Utf8.parse(secretKey);
  let decrypt = CryptoJS.AES.decrypt(str, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}