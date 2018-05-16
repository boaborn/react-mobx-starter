
import config from '../../config/config'
import request from 'superagent'
import { getExample } from './get.example'
class Api {
  request = request
  baseURL = ''
  async getExample(option) {
    return await getExample(this, option)
  }

}

export default new Api()
