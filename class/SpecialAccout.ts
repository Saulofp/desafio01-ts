import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount{
    constructor(name:string, accountNumber:number){
        super(name, accountNumber)
    }

    setSpecialDeposit = (specialDepositValue:number):void =>{
        if(this.validateStatus()){
            this.setBalance(this.getBalance() + 10 + specialDepositValue)
            console.log(`Você depositou: ${specialDepositValue}`)
            console.log(`Seu novo saldo , de acordo com as regras da conta especial é: ${this.getBalance()}`)
        }
    }
}