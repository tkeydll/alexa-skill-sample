const Alexa = require('alexa-sdk');
exports.handler = function(event, context, callback) {
    let alexa = Alexa.handler(event, context);
    alexa.appId = process.env.ALEXA_APPLICATION_ID;
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
 
const languageStrings = {
  'ja-JP': {
    'translation': {
      'HELLO' : 'こんにちは',
      'REPROMPT' : '何か話しかけてください',
      'CANCEL' : 'キャンセルしました',
      'UNKNOWN' : '知らねーよ'
    }
  }
};
 
var handlers = {
    'Unhandled': function () {
        this.emit(':tell', this.t("UNKNOWN"));
    }
};  