export class Order {
    id: number;
    productName: string;
    orderDate: string;
    qty: number;
    productPrice: number;
    status: string;
}

export enum OrderButtonText {
    AddButtonText = 'Add order',
    UpdateButtonText = 'Update order'
}
