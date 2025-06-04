import { OrderObserver } from "../interfaces/OrderObserver";
import { Order } from "../models/Order";
        
export class SlackNotifier implements OrderObserver {
    onOrderShipped(order: Order) {
        console.log('Enviando mensagem para Slack...');
        console.log(`Novo pedido enviado: ${order.id}`);
    }
}   