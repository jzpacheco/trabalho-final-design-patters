import { ShippingCarrier } from "../interfaces/ShippingCarrier";

export class Correios implements ShippingCarrier {
    calculateFee(weight: number): number {
        return weight * 1.5 + 10;
    }

    generateTrackingCode(): string {
        return `BR${Math.random().toString(36).substring(2, 15).toUpperCase()}`;
    }
}   