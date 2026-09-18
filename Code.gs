/**
 * Simple Google Apps Script starter.
 * Run helloWorld() from the Apps Script editor to log a greeting,
 * or bind this to a Google Sheet to get a custom menu with onOpen().
 */

function helloWorld() {
  Logger.log('Hello, World!');
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Starter Script')
    .addItem('Say Hello', 'showHelloAlert')
    .addToUi();
}

function showHelloAlert() {
  SpreadsheetApp.getUi().alert('Hello, World!');
}
