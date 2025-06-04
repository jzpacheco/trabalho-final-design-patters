import { Order } from "../models/Order";
import { OrderObserver } from "../interfaces/OrderObserver";

export class OrderSubject {
    private observers: OrderObserver[] = [];

    public shipOrder(order: Order) {
        console.log(`Pedido ${order.id} enviado!`);
        this.observers.forEach(observer => observer.onOrderShipped(order));
    }

    public addObserver(observer: OrderObserver) {
        this.observers.push(observer);
    }
}   