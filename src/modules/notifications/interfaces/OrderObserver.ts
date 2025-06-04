import { Order } from "../models/Order";

export interface OrderObserver {
    onOrderShipped(order: Order): void;
}
