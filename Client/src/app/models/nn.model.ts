export interface NN_Model {
    id: number;
    modelName: string;
    isEncrypted:boolean;
    isTrained: boolean;
    optimizers: string;
    trainingMethod: string;
    layers: Array<number>;
    biases: Array<number>;
    weights: Array<number>;
    activations: Array<string>;
    regularization: string;
    learningRate: number;
    epochs: number;
}