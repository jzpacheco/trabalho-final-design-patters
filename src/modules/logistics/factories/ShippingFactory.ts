import { Correios } from "../carriers/Correios";
import { ShippingCarrier } from "../interfaces/ShippingCarrier";
import { TransportadoraA } from "../carriers/TransportadoraA";

// ----Factory Method para criar a transportadora correta ---- //
export class ShippingFactory {
    public static getCarrier(productType: "standard" | "fragile" | "bulky"): ShippingCarrier {
        switch (productType) {
            case "fragile":
                return new TransportadoraA(); // Transportadora especializada em frágeis
            case "bulky":
                return new Correios(); // Correios aceita grandes volumes
            default:
                return new Correios(); // Padrão
        }
    }
}