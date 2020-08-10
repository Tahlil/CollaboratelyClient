export interface NN_Model {
    id: number;
    modelName: string;
    isEncrypted:boolean;
    isTrained: boolean;
    optimizer: string;
    trainingMethod: string;
    layers: Array<number>;
    biases: Array<any>;
    weights: Array<any>;
    activations: Array<string>;
    regularization: string;
    learningRate: number;
    epochs: number;
}