import { ShippingFactory } from "../factories/ShippingFactory";

// ---- 3. Uso no sistema de pedidos ---- //
export class OrderService {
    public shipOrder(productType: "standard" | "fragile" | "bulky", weight: number) {
        const carrier = ShippingFactory.getCarrier(productType);
                
        const fee = carrier.calculateFee(weight);
        const trackingCode = carrier.generateTrackingCode();

        console.log(`Frete: R$${fee.toFixed(2)} | Rastreio: ${trackingCode}`);
        return { fee, trackingCode };
    }
}