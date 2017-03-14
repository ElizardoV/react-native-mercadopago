
import { NativeModules } from 'react-native';

const { RNMercadopago } = NativeModules;

export default {
    startCheckout: function(publicKey, prefId, color, blackFont, success, failure) {
      RNMercadopago.startCheckout([publicKey, prefId, color, blackFont], success, failure);
    },
    createToken: function(publicKey, cardNumber, expirationMonth, expirationYear, securityCode, cardholderName, IdentificationType, identificationNumber, success, failure) {
      RNMercadopago.createToken([publicKey, cardNumber, expirationMonth, expirationYear, securityCode, cardholderName, IdentificationType, identificationNumber, ], success, failure);
    },
    getIdentificationTypes: function(publicKey, success, failure) {
      RNMercadopago.getIdentificationTypes([publicKey], success, failure);
    }
};
