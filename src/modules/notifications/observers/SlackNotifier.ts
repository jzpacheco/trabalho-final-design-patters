// implementações do observers ,que são objetos que reagem quando um pedido é enviado pelo orderSubject
// cada observer implementa a interfaxe orderObserver, acaba obrigando a existência do método orderShipped
import { OrderObserver } from "../interfaces/OrderObserver";
import { Order } from "../models/Order";

export class SlackNotifier implements OrderObserver {
  onOrderShipped(order: Order) {
    console.log("Enviando mensagem para Slack..."); //simula o envio de uma mensagem pra o slack
    console.log(`Novo pedido enviado: ${order.id}`);
  }
}

//ambos são reistrados no orderSubject e quando o método shipOrder() é chamado o método de cada observer é executado.
