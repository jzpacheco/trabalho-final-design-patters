import { OrderService } from "./modules/logistics/services/OrderService";
import { CustomerDashboardNotifier } from "./modules/notifications/observers/CustomerDashboardNotifier";
import { SlackNotifier } from "./modules/notifications/observers/SlackNotifier";
import { OrderSubject } from "./modules/notifications/subjects/OrderSubject";

// Logística
console.log("Logística");
const orderService = new OrderService();

orderService.shipOrder("standard", 1.5); 
orderService.shipOrder("fragile", 2.0); 

console.log("--------------------------------");
// Notificações
console.log("Notificações");
const orderSubject = new OrderSubject();

orderSubject.addObserver(new CustomerDashboardNotifier());
orderSubject.addObserver(new SlackNotifier());

orderSubject.shipOrder({ id: "123" });