import log4js from 'log4js'

log4js.configure({
  appenders: {
    console: { type: 'console' },
    errorFile: { type: 'file', filename: './src/logs/error.log' },
    warnFile: { type: 'file', filename: './src/logs/warn.log' },

    //* Logger levels
    consoleLogger: {
      type: 'logLevelFilter',
      appender: 'console',
      level: 'info'
    },
    errorLogger: {
      type: 'logLevelFilter',
      appender: 'errorFile',
      level: 'error'
    },
    warnLogger: { type: 'logLevelFilter', appender: 'warnFile', level: 'warn' }
  },
  categories: {
    default: { appenders: ['console'], level: 'info' },
    error: { appenders: ['console'], level: 'error' },
    warn: { appenders: ['console'], level: 'warn' }
  }
})

export const logInfo = log4js.getLogger('default')
export const logWarn = log4js.getLogger('warn')
export const logError = log4js.getLogger('error')
