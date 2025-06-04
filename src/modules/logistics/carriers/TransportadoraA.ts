import { ShippingCarrier } from "../interfaces/ShippingCarrier";

export class TransportadoraA implements ShippingCarrier {
    calculateFee(weight: number): number {
        // Lógica específica da Transportadora
        return weight * 2 + 5;
    }

    generateTrackingCode(): string {
        // Formato da XYZ (ex: "TRANSPORTADORA-A-2025-ABCDE")
        return `TRANSPORTADORA-A-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 7)}`;
    }
}