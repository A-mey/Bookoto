import { Product } from './product.type';

export type Startup = {
    SESSION_ID?: string;
    PRODUCTS: Product[];
}