export interface nnModel {
    id: Number;
    layers: Array<Number>;
    biases: Array<Number>;
    weights: Array<Number>;
    activations: Array<string>;
}