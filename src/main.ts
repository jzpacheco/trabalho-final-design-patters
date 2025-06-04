import { OrderService } from "./modules/logistics/services/OrderService";


const orderService = new OrderService();

// Pedido 1: Produto comum (standard)
orderService.shipOrder("standard", 1.5); 
// Saída: Frete: R$12.25 | Rastreio: BR8HXKLMNOP

// Pedido 2: Produto frágil (fragile)
orderService.shipOrder("fragile", 2.0); 
// Saída: Frete: R$9.00 | Rastreio: TRANSPORTADORA-A-2025-ABCDE