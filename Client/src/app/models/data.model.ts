export interface Data {
    id: number;
    fileName: string;
    fileType: string;
    datasetName: string;
    description: string;
    columns: Array<string>;
    columnTypes: Array<string>;
    numberOfRow: string;
    isEncrypted: boolean;
}