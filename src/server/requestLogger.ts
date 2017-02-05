import { Request, Response, NextFunction } from 'express'
const { log } = console

const logRequest = () => {
  const date = new Date()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const day = date.getDate()
  const month = date.getMonth()

  log(`✈️ Request - ${day}.${month}. - ${hour}:${minute}:${second}`)
}

const requestLogger = (request: Request, response: Response, next: NextFunction) => {
  logRequest()
  next()
}

export default requestLogger