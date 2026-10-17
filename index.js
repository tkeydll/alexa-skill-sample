const Alexa = require('ask-sdk-core');

const UNKNOWN_MESSAGE = '知らねーよ';

const UnhandledRequestHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak(UNKNOWN_MESSAGE)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(UnhandledRequestHandler)
    .withSkillId(process.env.ALEXA_APPLICATION_ID)
    .lambda();