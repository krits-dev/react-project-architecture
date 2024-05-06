import { networkService } from 'services'

// Fake request
export const testGetRequest = () => networkService.get('/someURL!!!')
