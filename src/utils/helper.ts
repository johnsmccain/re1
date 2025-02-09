import { FinancialData, IncomeData, UserInfo } from "../types";

export function parseUserInfo(data: Array<any>): UserInfo {
  if (!Array.isArray(data) || data.length < 12) {
    if (!Array.isArray(data) || data.length < 12) {
      console.warn('Invalid data format:', data);
      return {
        account: '',
        id: 0n,
        referrer: 0n,
        upline: 0n,
        start: 0n,
        level: 0n,
        directTeam: 0n,
        directTeamVolume: 0n,
        totalMatrixTeam: 0n,
        totalIncome: 0n,
        totalDeposit: 0n,
        referralIncome: 0n,
        levelIncome: 0n,
      };
    }
  }
    return {
      account: data[0] as string,
      id: data[1],
      referrer: data[2],
      upline: data[3],
      start: data[4],
      level: data[5],
      directTeam: data[6],
      directTeamVolume: data[7],
      totalMatrixTeam: data[8],
      totalIncome: data[9],
      totalDeposit: data[10],
      referralIncome: data[11],
      levelIncome: data[12],
    };
  }
  
 export function parseFinancialData(data: Array<any>): FinancialData {
  if (!Array.isArray(data) || data.length < 11) {
    return {
      firstValue: 0n,
      secondValue: 0n,
      thirdValue: 0n,
      fourthValue: 0n,
      fifthValue: 0n,
      sixthValue: 0n,
      seventhValue: 0n,
      eighthValue: 0n,
      ninthValue: 0n,
      tenthValue: 0n,
      eleventhValue: 0n,
      twelfthValue: 0n,
    };
  }
    return {
      firstValue: data[0],
      secondValue: data[1],
      thirdValue: data[2],
      fourthValue: data[3],
      fifthValue: data[4],
      sixthValue: data[5],
      seventhValue: data[6],
      eighthValue: data[7],
      ninthValue: data[8],
      tenthValue: data[9],
      eleventhValue: data[10],
      twelfthValue: data[11],
    };
  }
  


  export function parseIncomeData(data: Array<any>): IncomeData {
    if (!Array.isArray(data) || data.length < 11) {
      return {
        firstValue: 0n,
        secondValue: 0n,
        thirdValue: 0n,
        fourthValue: 0n,

      };
    }
      return {
        firstValue: data[0],
        secondValue: data[1],
        thirdValue: data[2],
        fourthValue: data[3],

      };
    }
    