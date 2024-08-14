import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loanValue:number): void => {
    if(this.validateStatus()){
      this.setBalance(this.getBalance() + loanValue)
      console.log(`Voce pegou um empréstimo de: ${loanValue}`)
      console.log(`Seu novo saldo é ${this.getBalance()}`)
    }
    else console.log('Conta Inválida')
  }
} 
