export interface NN_Model {
    id: number;
    isEncrypted:boolean;
    isTrained: boolean;
    optimizers: Array<string>;
    trainingMethod: string;
    layers: Array<number>;
    biases: Array<number>;
    weights: Array<number>;
    activations: Array<string>;
    regularization: string;
    learningRate: number;
}