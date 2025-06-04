// Interface para representar um transportador de produtos
export interface ShippingCarrier {
    calculateFee(weight: number): number;
    generateTrackingCode(): string;
}