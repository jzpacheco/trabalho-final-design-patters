// implementação dos observers

import { OrderObserver } from "../interfaces/OrderObserver";
import { Order } from "../models/Order";

export class CustomerDashboardNotifier implements OrderObserver {
  onOrderShipped(order: Order) {
    console.log("Atualizando dashboard do cliente..."); // simula a atualização do painel cliente.
    console.log(`Pedido ${order.id} adicionado ao dashboard!`);
  }
}
