export const ADD_NEWINVESTOR = 'ADD_NEWINVESTOR'

export const INVESTORTYPE = {
    INDIVIDUAL: 'INDIVIDUAL',
    JOINT: 'JOINT',
    COMPANY: 'COMPANY',
    TRUSTEE: 'TRUSTEE'
  }

  export function addNewInvestor(text) {
    return { type: ADD_TODO, text }
  }