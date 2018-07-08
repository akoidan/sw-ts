import {Logger, LoggerFactory, LogStrict} from 'lines-logger';

declare var clients: any;

let loggerFactory: LoggerFactory = new LoggerFactory(LogStrict.LOG_WITH_WARNINGS);
let logger: Logger = loggerFactory.getLoggerColor('SW_S', 'color: #ffb500; font-weight: bold');

async function a() {
  console.log('sw a called');
}
console.log('sw');