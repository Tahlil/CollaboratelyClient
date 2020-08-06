export interface NN_Model {
    id: Number;
    layers: Array<Number>;
    biases: Array<Number>;
    weights: Array<Number>;
    activations: Array<string>;
}