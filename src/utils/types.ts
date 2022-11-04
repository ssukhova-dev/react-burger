
export type TIngredient = {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number,
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
}

export type TCartIngredient = TIngredient & {
    order: number;
    key: string;
}

export type TDropCollectedProps = {
    isHover: boolean;
}

export interface IRouteProps{
    redirectTo: string;
    noRedirect: boolean;
}
  