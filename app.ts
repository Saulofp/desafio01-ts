import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { SpecialAccount } from './class/SpecialAccout';

//const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Saulo', 10, 0)//criando a conta pf
//console.log(peopleAccount)//visualização da conta
//peopleAccount.deposit(10)//implemento do primeiro deposito
//peopleAccount.deposit(30)//depositando mais dinheiro
//peopleAccount.withdraw(20)//fazendo saque com fundos suficientes
//peopleAccount.withdraw(30)//tentando sacar com fundos insuficientes
//peopleAccount.getBalanceView()//verificando saldo da conta

// const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)//criandoa a conta pj
// console.log(companyAccount)//visualização da conta
// companyAccount.deposit(10)//fazendo primeiro deposito
// companyAccount.getLoan(20)//pedindo um emprestimo
// companyAccount.withdraw(30)//fazendo um saque
// companyAccount.withdraw(10)//tentando sacar com fundos insuficientes
// companyAccount.getBalanceView()//verificando saldo

const specialAccount: SpecialAccount = new SpecialAccount('Saulo Faria', 30)//criando a conta especial
console.log(specialAccount)//visualização da conta
specialAccount.deposit(10)//fazendo deposito normal
specialAccount.setSpecialDeposit(20)// fazendo deposito especial
specialAccount.withdraw(10)//fazendo um saque
specialAccount.withdraw(50)//tentando sacar com fundos insuficientes
specialAccount.getBalanceView()//verificando saldo